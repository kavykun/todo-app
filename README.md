# TODO APP

Todo App For Fun

## Installation

Use either npm or yarn to install packages

```bash
yarn
```

## Usage

To run the application:

```bash
yarn start
```

To execute the tests:

```bash
yarn test
```

To run coverage report:

```bash
yarn test --coverage
```

## Architecture Decisions

# Packages Used

| Name             |                                                                   |
| ---------------- | ----------------------------------------------------------------- |
| react-scripts    | Easy scaffolding with tools for a new react application           |
| prop-types       | Typechecking react components                                     |
| moment           | Date/time parsing library                                         |
| @testing-library | Testing utility with a suite of tools to better test the frontend |
| web-vitals       | To mock API calls in JEST                                         |

# Folder Structure

    .
    ├── ...
    ├── api                     # Test files (alternatively `spec` or `tests`)
    │   ├── benchmarks          # Load and stress tests
    │   ├── integration         # End-to-end, integration tests (alternatively `e2e`)
    │   └── unit                # Unit tests
    └── ...

Like with any react project that I create, I will take the design and think about how I can make reusuable components out of
any of the UI elements.

# Styling

I used vanilla CSS to simplify styling for the purpose of this assignment. Personally,
I would use styled-components or any CSS-in-JSS library so I can use ES6 an CSS to styled my components.
As for the decision on styling, I generally like to create a stylesheet per component event the parent components.
First the styling would be done on the common

# Testing
