# Angular2 Webpack Starter [![Join Slack](https://img.shields.io/badge/slack-join-brightgreen.svg)](https://angularclass.com/slack-join) [![Join the chat at https://gitter.im/angularclass/angular2-webpack-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/angularclass/angular2-webpack-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


> An Angular 2 starter kit featuring [Angular 2](https://angular.io) and [Angular 4](https://github.com/angular/angular/tree/4.0.0-beta.0) ([Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/ts/latest/guide/testing.html), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack 2](http://webpack.github.io/) by [AngularClass](https://angularclass.com).

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast. Using a [Webpack 2](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for Angular 2.
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Ahead of Time (AoT) compile for rapid page loads of your production builds.
* Tree shaking to automatically remove unused code from your production bundle.
* [Webpack DLLs](https://robertknight.github.io/posts/webpack-dll-plugins/) dramatically speed your development builds.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* Type manager with @types
* Hot Module Replacement with Webpack and [@angularclass/hmr](https://github.com/angularclass/angular2-hmr) and [@angularclass/hmr-loader](https://github.com/angularclass/angular2-hmr-loader)
* Material Design with [angular/material2](https://github.com/angular/material2)
* Angular 4 support via changing package.json and any future Angular versions


```bash

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
npm run webdriver:update
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# AoT Don'ts
The following are some things that will make AoT compile fail.

- Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don’t use default exports.
- Don’t use `form.controls.controlName`, use `form.get(‘controlName’)`
- Don’t use `control.errors?.someError`, use `control.hasError(‘someError’)`
- Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
- @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

# External Stylesheets
Any stylesheets (Sass or CSS) placed in the `src/styles` directory and imported into your project will automatically be compiled into an external `.css` and embedded in your production builds.

For example to use Bootstrap as an external stylesheet:
1) Create a `styles.scss` file (name doesn't matter) in the `src/styles` directory.
2) `npm install` the version of Boostrap you want.
3) In `styles.scss` add `@import 'bootstrap/scss/bootstrap.scss';`
4) In `src/app/app.module.ts` add underneath the other import statements: `import '../styles/styles.scss';`

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


# Frequently asked questions
* What's the current browser support for Angular 2?
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* How do I run protractor with node 0.12.x?
  * please check out this repo to use the old version of protractor [#146](https://github.com/AngularClass/angular2-webpack-starter/pull/146/files)
* Where do I write my tests?
  * You can write your tests next to your component files. See [`/src/app/home/home.component.spec.ts`](/src/app/home/home.component.spec.ts)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How to use `sass` for css?
 *  * `loaders: ['raw-loader','sass-loader']` and `@Component({ styleUrls: ['./filename.scss'] })` see Wiki page [How to include SCSS in components](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-to-include-SCSS-in-components), or issue [#136](https://github.com/AngularClass/angular2-webpack-starter/issues/136) for more information.
* How do I test a Service?
 * See issue [#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
 * The VS Code chrome debug extension support can be done via `launch.json` see issue [#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
 * You need to use `0.0.0.0` so revert these changes [#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* What are the naming conventions for Angular 2?
 * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I include bootstrap or jQuery?
 * please see issue [#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* How do I async load a component?
 * see wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute)
* Error: Cannot find module 'tapable'
 * Remove `node_modules/` and run `npm cache clean` then `npm install`
* How do I turn on Hot Module Replacement
 * Run `npm run server:dev:hmr`
* `RangeError: Maximum call stack size exceeded`
 * This is a problem with minifying Angular 2 and it's recent JIT templates. If you set `mangle` to `false` then you should be good.
* Why is the size of my app larger in development?
 * We are using inline source-maps and hot module replacement which will increase the bundle size.
* If you're in China
 * check out https://github.com/cnpm/cnpm
* If you're looking to add Angular 2 Material Design
 * check out the [material2](https://github.com/AngularClass/angular2-webpack-starter/tree/material2) branch
* node-pre-gyp ERR in npm install (Windows)
 * install Python x86 version between 2.5 and 3.0 on windows see issue [#626](https://github.com/AngularClass/angular2-webpack-starter/issues/626)
* `Error:Error: Parse tsconfig error [{"messageText":"Unknown compiler option 'lib'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'strictNullChecks'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'baseUrl'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'paths'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'types'.","category":1,"code":5023}]`
 * remove `node_modules/typescript` and run `npm install typescript@beta`. This repo now uses ts 2.0 
* "There are multiple modules with names that only differ in casing"
 * change `c:\[path to angular2-webpack-starter]` to `C:\[path to angular2-webpack-starter]` see [926#issuecomment-245223547](https://github.com/AngularClass/angular2-webpack-starter/issues/926#issuecomment-245223547)
___

# License
 [MIT](/LICENSE)
