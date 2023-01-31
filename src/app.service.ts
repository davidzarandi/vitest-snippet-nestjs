import { Injectable } from "@nestjs/common";
import {
  HealthCheckResult,
  HealthCheckService,
  HealthIndicatorResult,
  HttpHealthIndicator,
} from "@nestjs/terminus";
import { from, Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(
    private readonly health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  checkHealth(): Observable<HealthCheckResult> {
    return from(this.health.check([() => this.checkAuthService()]));
  }

  private checkAuthService(): Promise<HealthIndicatorResult> {
    return this.http.pingCheck("auth-service", "https://google.com");
  }
}
