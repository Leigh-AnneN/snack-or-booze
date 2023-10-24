### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? 
  - A library for handing routing in React applications. It serves several purposes: navigation, managing user interface of a single-page web application. Main purposes: Client-side Routing, Multi-page feeling, nested routing, route parametres, route guards and redirects, history management, dynanmic routing, code-splitting, integration with react. 

- What is a single page application?
  - a type of web application or website that interacts with the user dynamically rewriting the current page rather than loading an entirely new page from the server. They update content without requiring a full page reload. 
  
- What are some differences between client side and server side routing?
  - Client side routing is javascript based, i.e. handled by JS frameworks or libraries such as React Router. The routing logic is executed on teh client side in the user's web browser. It has a faster intial load, smoother transitions and has client-side state management. URLS reflect routes. 
  - Server-side routing is primarly based on the server's configuration and used in multi-page applications. Each route corresponds to a distinct server-generated page. Features include full page reloads, and therefore longer initial load times. It's URLS directly map to pages and it's stateless (require additional mechanisms like cookies or sessions). Limited interactivity, and used for traditional web applications. 

- What are two ways of handling redirects with React Router? When would you use each?
  1. Redirect component: a component that can be used to specify a redirection in the route config, or within the components. Used for static redirects that don't depend on dynamic conditions or state. 
  2. Using the 'history' object for programmatic redirects: allows you to perform programmatic redirects us JS code. cn be used by 'useHistory' hook or 'withRouter'. Used for dynamic redirects like a form submission, or other user interactions. Conditional redirecgts and redirects inside of functions (respond to an API request).

- What are two different ways to handle page-not-found user experiences using React Router? 
  1. Using a route with a 'Switch' component: One of the most commong ways is to use a catch-all route by placing it at the end of your route configuration withing a 'Switch' component. It will match any URL that hasn't been matched by other routes. 
  2. Using a 'Redirect' component:by creating a special "not found" route and using the 'Redirect' component to navigate to it when no other route matches.

- How do you grab URL parameters from within a component using React Router?
  - by accessing the 'useParams' hook, which is provided by react-router-dom, allows you to access and retrieve the parameters defined in the route's path. 

- What is context in React? When would you use it? 
  - Context is a feature that allows you to share data accress the component tree without the need to pass props manually at each level of nesting. It provides a way to access and update data from any component within a React application, making it a powerful tool for managing global, or shared state, configuration, themes and other data that multiple components need access to. You might use it to: manage global state, theme management, localization and  internalization, user authentication, routing and navigation and reusing components. 

- Describe some differences between class-based components and function components in React.
  - syntax, state, life-cycle methods, code reusability, complexity, context api and hhooks, default props and prop types. 

- What are some of the problems that hooks were designed to solve?
  - complex component logic: in class based componetns, complex logic often leads to components becoming large and difficult to understand. Hooks allow devs to organize and reuse logic, breaking down complex components into smaller, more manageable parts. 
  - reusing stateful logic: custom hooks can be created to encapsulate and share stateful login accross multiple components. 
  - State management: Hooks provide a more declarative and concise way to manage state within function components. 
  - Code duplication: Hooks like 'useEffect' allow operations to be consolidated in a single location.