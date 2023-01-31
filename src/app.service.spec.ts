import { describe, expect, beforeEach, afterEach, it, vi } from "vitest";
import { Test, TestingModule } from "@nestjs/testing";
import { HealthCheckService, HttpHealthIndicator, TerminusModule } from "@nestjs/terminus";
import { HttpModule } from "@nestjs/axios";

import { AppService } from "./app.service";

describe("AppService", () => {
  let appService: AppService;
  const http: Partial<HttpHealthIndicator> = { pingCheck: vi.fn() };
  const health: Partial<HealthCheckService> = { check: vi.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule, HttpModule],
      providers: [AppService, HealthCheckService, HttpHealthIndicator],
    })
      .overrideProvider(HealthCheckService)
      .useValue(health)
      .overrideProvider(HttpHealthIndicator)
      .useValue(http)
      .compile();

    appService = module.get<AppService>(AppService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should be defined", () => {
    expect(appService).toBeDefined();
  });

  describe("checkHealth", () => {
    it("should call the health check functions", () => {
      health.check = vi.fn().mockImplementation((callbackArray: (() => void)[]) => {
        callbackArray.forEach((cb) => cb());
        return Promise.resolve("OK");
      });
      appService.checkHealth();
      expect(http.pingCheck).toBeCalledTimes(1);
    });
  });
});
