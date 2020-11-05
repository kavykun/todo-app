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

I am leveraging an environment config for the API key so you will need to create a .env file in the root
with these details:

```bash
REACT_APP_TODO_API_KEY=PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c
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
    ├── api                     # List of API related files (URL constants for endpoints).
    ├── common                  # Common components folder for reusability.
    ├── components              # Parent or container components that pieces together other components and fetches data.
    ├── layout                  # Layout specific components like header, footer, etc.
    ├── utils                   # A utility folder containing helper functions.
    ├── App.jsx                 # Root component for the application.
    ├── index.js                # Root index file to instantiate the application.
    ├── eslintrc.js             # Eslint specific rules and configurations for lint checks.
    ├── .prettierrc.js          # Prettier rules for formatting and styleguide
    └── ...

Like with any react project that I create, I will take the design and think about how I can make reusable components out of
any of the UI elements.

# Styling

I used vanilla CSS to simplify styling for this assignment. Personally,
I would use styled-components or any CSS-in-JSS library so I can use ES6 and CSS to style my components.
As for the decision on styling, I generally like to create a stylesheet per component even the parent components.
First, the styling would be done on the common components. Traditionally, I will build web applications with mobile-first principles in mind.
Building for mobile breakpoints first for the reason that many users are going to be using their mobile devices.
As for deciding on the breakpoints, I normally would start with 375px (iphone 8), 768px (tablet), 1280px (desktop), and 1400px (large desktop).
These breakpoints are my own opinion but if there are one-offs then I will also include them.
For the sake of time, I only include one media query but if I had a mobile design mock using them first would be the start of my implementation.
I want my CSS to scale so there's no question if a property is overlapping another in a different breakpoint.
For example, a property of `width: 100%` at 375px will carry all the over the desktop using a min-width media query so you do not have to repeat yourself.
If any point this CSS property needs to change, then it will be defined in another min-width media query.

# Components

For the common components folder, I like to remove any type of specific logic that would be tied to a feature out of the common components because I want to make them as reusable as possible.
It makes it easier to test the components in isolation. If I wanted to include storybook, I can create a component library and run all of my jests through that.
Components in isolation are easily testable and finding bugs is the granular helps maintain and scale the parents or container components that inherit them.
The components folder is like the features folder where all the main features and parent containers live. These components are aware of state, business logic and responsible for
retrieving data. If I want to include redux then these are the components I would connect it to. I wanted to include and custom-built high-order-components or inject a theme, this is the folder to do it.

# Testing

Testing library and Jest were including as part of the create-react-app scaffolding so I opted to use these tools for ease of unit testing the react components.
I extended testing library to include react test utility so that it is easier to query for elements and make better assertions. The reason for choosing testing library over another library like enzyme is because it allows us to test our components without including any extra implementation details.
For example, testing library's render method generates the HTML output of reach components exactly like how it would appear in the DOM. However, one drawback to testing react testing library is that you will not be able to manipulate the component state.
Rather than tests focusing on the implementation of the component, testing library is more focused on user behavior and how a user would interact with a component. I can concentrate on writing scalable tests without the overhead of having to learn every possible way to render a component using Enzyme.
Lastly, there are mocks folders which include mock data for testing purposes, I like to abstract there out of the testing file for reusability.

# Additional Notes

- I added a network activity tracker at the bottom of the application to help illustrate state and processing.
- The PATCH API calls to update the todo items are executed but since refetching the todos will reset the data, I left it at that so it is a more accurate representation of the requirements.
