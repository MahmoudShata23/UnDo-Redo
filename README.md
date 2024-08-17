# DoRedo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Implementation Details

`Form Setup`: Created a reactive form with multiple input fields.
`Undo/Redo Buttons`: Added buttons for Undo and Redo actions.
`State Management`: Used stacks to maintain the history of changes.
`Undo/Redo Actions`: Implemented functions to handle Undo and Redo actions.
`User Experience`: Provided visual feedback for Undo/Redo actions.

## Testing

`Initial State`: Verify the form initializes correctly.
`Change Tracking`: Make changes to the form and ensure they are tracked.
`Undo Action`: Click the Undo button and verify the form reverts to the previous state.
`Redo Action`: Click the Redo button and verify the form reverts to the state before the Undo action.
`Button States`: Ensure the Undo button is disabled when there are no changes to undo and the Redo button is disabled when there are no changes to redo.
