# Vitest NestJS coverage example snippet

For some reason when I run the test, it tells me that I did not test lines that are only contain `import` from the
`node_modules`.

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

 ✓ src/app.controller.spec.ts (2)
 ✓ src/app.service.spec.ts (2)

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  15:03:04
   Duration  1.95s (transform 482ms, setup 0ms, collect 1.44s, tests 39ms)

 % Coverage report from c8
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |    82.5 |    72.72 |      75 |    82.5 |                   
 app.controller.ts |   93.75 |    83.33 |     100 |   93.75 | 4                 
 app.service.ts    |      75 |       60 |      60 |      75 | 2-5,8-9           
-------------------|---------|----------|---------|---------|-------------------
```

## Report with istanbul

```shell
$ npm run test

> test
> vitest run --coverage


 RUN  v0.28.3 /home/azuwey/Projects/vitest-snippet-nestjs
      Coverage enabled with istanbul

 ✓ src/app.service.spec.ts (2)
 ✓ src/app.controller.spec.ts (2)

 Test Files  2 passed (2)
      Tests  4 passed (4)
   Start at  15:10:07
   Duration  2.10s (transform 657ms, setup 0ms, collect 1.66s, tests 45ms)

 % Coverage report from istanbul
-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |   60.71 |       50 |      75 |      70 |                   
 app.controller.ts |   76.92 |    78.26 |     100 |    87.5 | 4                 
 app.service.ts    |   46.66 |    19.04 |      60 |   58.33 | 2-5,8             
-------------------|---------|----------|---------|---------|-------------------
```
