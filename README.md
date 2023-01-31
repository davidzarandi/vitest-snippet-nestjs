# Vitest NestJS coverage example snippet

## Steps:

1. Install npm dependencies by running this command: `npm install`
2. To run the test with coverage report run the following command: `npm run test`

## Report with c8

```shell
$ npm run test

> test
> vitest run --coverage


 RUN  v0.28.3 /home/azuwey/Projects/vitest-snippet-nestjs
      Coverage enabled with c8

 ✓ src/app.service.spec.ts (3)
 ✓ src/app.controller.spec.ts (3)

 Test Files  2 passed (2)
      Tests  6 passed (6)
   Start at  23:19:05
   Duration  2.23s (transform 438ms, setup 1ms, collect 1.31s, tests 20ms)

 % Coverage report from c8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |      100 |     100 |     100 |                   
 app.controller.ts |     100 |      100 |     100 |     100 |                   
 app.service.ts    |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------

```
