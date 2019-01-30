import { Article } from './content';

export const articles: Article[] = [
    { title: 'Getting Started', data: 'Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop.' },
    { title: 'Prerequisites', data: 'You define a component is application logic—what it does to support the view—inside a class. The class interacts with the view through an API of properties and methods.' },
    { title: 'Introduction to modules', data: 'Angular apps are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. ' },
    { title: 'NgModule metadata', data: 'Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.' },
    { title: 'NgModules and components', data: 'Angular NgModules differ from and complement JavaScript (ES2015) modules. An NgModule declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities. ' },
    { title: 'Angular libraries', data: 'Dependency injection (DI) lets you keep your component classes lean and efficient. They don not fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.' },
    { title: 'Introduction to components', data: 'If the router determines that the current application state requires particular functionality, and the module that defines it hasn not been loaded, the router can lazy-load the module on demand.' },
    { title: 'Component metadata', data: 'The metadata for a component tells Angular where to get the major building blocks that it needs to create and present the component and its view. In particular, it associates a template with the component, either directly with inline code, or by reference. Together, the component and its template describe a view.' },
    { title: 'Templates and views', data: 'A view hierarchy can include views from components in the same NgModule, but it also can (and often does) include views from components that are defined in different NgModules.' },
    { title: 'Directives', data: 'Angular templates are dynamic. When Angular renders them, it transforms the DOM according to the instructions given by directives. A directive is a class with a @Directive() decorator.' },
]