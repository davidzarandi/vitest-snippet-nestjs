import { beforeEach, describe, expect, it, vi } from "vitest";

import { MockHealthCheckService, mockHealthCheckResult } from "./__mock__/healthCheckService.mock";
import { MockHttpHealthIndicator } from "./__mock__/httpHealthIndicator.mock";

import { AppService } from "./app.service";

describe("AppService class", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("when given injections", () => {
    it("should create an instance", () => {
      expect(new AppService(MockHealthCheckService, MockHttpHealthIndicator)).toBeDefined();
    });

    it("should return a checkHealth function", () => {
      const appService = new AppService(MockHealthCheckService, MockHttpHealthIndicator);
      expect(appService.checkHealth).toBeDefined();
    });
  });

  describe("when checkHealth called", () => {
    it("should return with a valid result", () => {
      const appService = new AppService(MockHealthCheckService, MockHttpHealthIndicator);

      appService.checkHealth().subscribe((data) => {
        expect(data).toBe(mockHealthCheckResult);
        expect(MockHealthCheckService.check).toBeCalledTimes(1);
      });
    });
  });
});
