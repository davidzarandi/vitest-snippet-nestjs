import { describe, expect, beforeEach, afterEach, it, vi } from "vitest";
import { of } from "rxjs";
// import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;
  const mockHealthCheckResult = '{"status": "ok","info": {},"error": {},"details": {}}';
  const appService: Partial<AppService> = {
    checkHealth: vi.fn().mockReturnValue(of(mockHealthCheckResult)),
  };

  beforeEach(async () => {
    /* const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    appController = moduleRef.get<AppController>(AppController); */
    appController = new AppController(<AppService>appService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  });

  describe("checkHealth", () => {
    it("should call the appService", () => {
      appController.checkHealth().subscribe((data) => {
        expect(data).toBe(mockHealthCheckResult);
      });
    });
  });
});
