
# UI Todo
- Add font awesome correctly
- User Menu
- Exit Workspace Menu
- Tools Menu
- Bundle UI (Maybe skipp for now)
- Details UI

# Other ToDo
- Install k8s
- Docker App for front-end
- Ingress controller? Yuck
- Start on Dev Service
-- Basic Persistence, use pg or sql lite
-- Go lang app... yuck
-- Start service using k8s API
-- Connect to running service
-- Exit workspace terminates pod, or leaves it running (up to the user)
-- Service times out pods that havent been used... need to figure out how to get an activity check from the server
- Try server side includes, That would be a very different model
- Start on docker commit service
-- Daemon service or side car pod
-- On command calls docker commit. Takes a short-id and 
- Figure out how to delete old workspaces. Can provide a versioning system of sorts. 
- Implement clone
- Need to define archive. Plan to interface with Glacier. Big task I think.
- Need to decide if we really want to have a separate mounted volume or, if we get save working correctly, if we can just use the docker to store stuff

## Service Design
GET /workspaces return all workspaces for the user
POST /workspaces/:id save a workspace for a user
DEL /workspaces/:id delete a workspace
PUT /workspaces/:id update a workspace for a user

GET /workspace/:id/sessions
POST /workspace/:id/start-session
GET /workspace/:id/session-status

GET /session/:id - Gets the status of the session
DELETE /session/:id - Stops a session
POST /session/:id- Starts a session (if needed)















# LairApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
