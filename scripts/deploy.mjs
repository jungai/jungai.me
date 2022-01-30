#!/usr/bin/env zx

import 'zx/globals';

console.log(chalk.blue('==== prepare for deploy ===='));

const target = argv['v'] || 'patch';

const version = await $`npm version ${target}`;

await $`git push origin master`;
await $`git push origin ${version}`;

console.log(chalk.green('==== finish ===='));
