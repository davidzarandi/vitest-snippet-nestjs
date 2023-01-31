import {vi} from "vitest";
import {HealthIndicatorResult, HttpHealthIndicator} from "@nestjs/terminus";
import {ModuleRef} from "@nestjs/core";


export const mockHealthIndicatorResult: HealthIndicatorResult = {
  "service": {
    status: "up"
  }
};

export const MockHttpHealthIndicator = new (class extends HttpHealthIndicator {
  constructor() {
    super(<ModuleRef><unknown>vi.fn())
  }

  pingCheck = vi.fn().mockReturnValue(Promise.resolve(mockHealthIndicatorResult))
})();
