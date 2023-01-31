import { beforeEach, describe, expect, it, vi } from "vitest";
import { of } from "rxjs";

import { MockHealthCheckService, mockHealthCheckResult } from "./__mock__/healthCheckService.mock";
import { MockHttpHealthIndicator } from "./__mock__/httpHealthIndicator.mock";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController class", () => {
  const MockAppService = new (class extends AppService {
    constructor() {
      super(MockHealthCheckService, MockHttpHealthIndicator);
    }

    checkHealth = vi.fn().mockReturnValue(of(mockHealthCheckResult));
  })();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("when given injections", () => {
    it("should create an instance", () => {
      expect(new AppController(MockAppService)).toBeDefined();
    });

    it("should return a checkHealth function", () => {
      const appController = new AppController(MockAppService);
      expect(appController.checkHealth).toBeDefined();
    });
  });

  describe("when checkHealth called", () => {
    it("should return with a valid result", () => {
      const appController = new AppController(MockAppService);

      appController.checkHealth().subscribe((data) => {
        expect(data).toBe(mockHealthCheckResult);
        expect(MockAppService.checkHealth).toBeCalledTimes(1);
      });
    });
  });
});
