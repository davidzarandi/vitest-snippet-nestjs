import { vi } from "vitest";
import {HealthCheckResult, HealthCheckService} from "@nestjs/terminus";
import {HealthCheckExecutor} from "@nestjs/terminus/dist/health-check/health-check-executor.service";
import {ErrorLogger} from "@nestjs/terminus/dist/health-check/error-logger/error-logger.interface";

import {mockHealthIndicatorResult} from "./httpHealthIndicator.mock";

export const mockHealthCheckResult: HealthCheckResult = {
  status: "ok",
  details: mockHealthIndicatorResult
};

export const MockHealthCheckService = new (class extends HealthCheckService {
  constructor() {
    super(<HealthCheckExecutor><unknown>vi.fn(), <ErrorLogger><unknown>vi.fn())
  }

  check = vi.fn().mockReturnValue(Promise.resolve(mockHealthCheckResult))
})();
