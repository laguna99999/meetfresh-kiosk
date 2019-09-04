# MeetfreshKiosk

This project was generated with [Node.js](https://nodejs.org) version 12.9.1, [npm](https://www.npmjs.com/) version 6.10.2, [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

Developed on Ubuntu 19.04 in atom editor, and the test version is deployed to [Heroku](https://meetfresh-kiosk.herokuapp.com).

## Installing local

- Ubuntu 19.04 terminal
    -- Install Node.js 12.9.1 & npm
    `sudo apt-get install curl`
    `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
    `sudo apt-get install nodejs`
    -- Install Angular CLI
    `npm install -g @angular-cli@8.2.2`
    -- Navigate to the project root directory and run
    `npm install`

- Windows 10
    -- Download [Node.js 12.9.1](https://nodejs.org)
    -- Open Command line and run
    `npm install -g @angular-cli@8.2.2`
    -- Navigate to the project root directory and run
    `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Production server

The project contains node server in the root directory that can run app. That file is server.js. To run the production app, build the app first, and run `node server.js` in the root directory.

The app will be on https://localhost:3000

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
