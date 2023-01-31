import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { HealthCheckResult } from "@nestjs/terminus";
import { Observable } from "rxjs";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  /* c8 ignore start */
  constructor(/* c8 ignore stop */

    private readonly appService: AppService
  ) {
    /* c8 ignore stop */
  }

  @MessagePattern({ cmd: "check_health" })
  checkHealth(): Observable<HealthCheckResult> {
    return this.appService.checkHealth();
  }
}
