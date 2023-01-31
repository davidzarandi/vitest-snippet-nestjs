import { Injectable } from "@nestjs/common";
import {
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
} from "@nestjs/terminus";
import { from, Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(
    /* c8 ignore start */
    private readonly healthCheckService: HealthCheckService,
    private readonly httpHealthIndicator: HttpHealthIndicator,
    /* c8 ignore stop */
  ) {}

  checkHealth(): Observable<HealthCheckResult> {
    return from(this.healthCheckService.check([() => this.httpHealthIndicator.pingCheck("auth-service", "https://google.com")]));
  }
}
