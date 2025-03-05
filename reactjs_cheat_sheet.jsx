------------------------------------------------------Reactjs Cheatsheet ------------------------------------------------
---------------------------------------------------------------------------------------------
--------------------------
1 what is reactjs?
ReactJS, commonly referred to as React, is a popular JavaScript library used for building user 
interfaces,particularly single-page applications where a dynamic and responsive user experience 
is crucial.Developed and maintained by Facebook (now Meta) along with a community of developers, 
React focuses on 
creating reusable UI components that manage their own state.

--------------------------------------------------------------------------------------------------------
2. Features of Reactjs?
1. Components: React builds user interfaces using components, which are self-contained, reusable pieces of 
code that define how a user interface should look and behave.

2. JSX: React uses JSX (JavaScript XML), a syntax extension that allows developers to write HTML-like code 
within JavaScript. This makes it easier to visualize and manage the structure of the UI.

3. Virtual DOM: React maintains a virtual DOM, a lightweight copy of the actual DOM. When changes are made, 
React updates the virtual DOM first and then efficiently updates the real DOM to reflect those changes. 
This process improves performance and ensures that the UI is updated quickly.

4. State and Props: Components can manage their own state and receive data through props (short for properties).
State represents data that can change over time, while props are used to pass data from parent components 
to child components.

5. Lifecycle Methods: React components have lifecycle methods that allow developers to hook into different
phases of a component's life, such as when it is created, updated, or destroyed. This helps manage side 
effects and other operations.

6. Hooks: React introduced Hooks in version 16.8, which are functions that let you use state and other 
React features without writing class components. Common hooks include useState, useEffect, and 
useContext.
---------------------------------------------------------------------------------------------------------------
Create the Reactjs project using the npm
--npx create-react-app project_name  //time consuming for create react new project  
-- npm start 
-- npm run start //run the reactjs project

 //----------------------or---------------
 
//using vite to create react project 
--npm create vite@latest
//when you have to craete vite react project you have install manually node_module folder
--npm i //insall node_module folder 
--npm run dev  // to run the vite react project 

//--------------or-----------------------

//usnig bun to create reactjs project
//install bun in globaly 
--npm install -g bun
--bun create vite 
--Enter project name 
--bun dev     //run react project 

//install current latest version of reactjs 
bun install react@rc

-----------------------------------React and React DOM install  command------------------------------

Install React and React DOM: Since you're working on a React project, make sure to install react and react-dom:
--> npm install react react-dom react-scripts

----------------------React JSX ------------------------------------
What is JSX ? 
--JSX stands for JavaScript XML. JSX is basically a syntax extension of JavaScript.
React JSX helps us to write HTML in JavaScript and forms the basis of React Development.
--JSX creates an element in React that gets rendered in the UI. It is transformed into JavaScript functions by 
the compiler at runtime. Error handling and warnings become easier to handle when using JSX.

a

// Creates a React element that displays a greeting message using the name variable.
let name = "Learner";
let element = (
<h1>
     Hello, {name} Welcome to NeTtech India
</h1>
)
createRoot(document.getElementById('root')).render(element);

//-----------------Attributes in JSX-----------------------
1. THE CHANGE OF CLASS ATTRIBUTE TO CLASSNAME:- The class in HTML becomes className in JSX.The main reason behind 
this is that some attribute names in HTML like ‘class‘ are reserved keywords in JavaScript. So, in order to 
avoid this problem, JSX uses the camel case naming convention for attributes

2. CREATION OF CUSTOM ATTRIBUTES :We can also use custom attributes in JSX. For custom attributes, the names of 
such attributes should be prefixed by data-* attribute.

Example:
const element = (
    <div>
        <h1 className="hello">Hello NetTech India</h1>
        <h2 data-sampleAttribute="sample">
            Custom attribute
        </h2>
    </div>
);
createRoot(document.getElementById('root')).render(element);

//------------------Wrapping elements or Children in JSX-------------
Consider a situation where you want to render multiple tags at a time. To do this we need to wrap all of these 
tags under a parent tag and then render this parent element to the HTML. All the subtags are called child tags.

Example:
const element = (
    <div>
        <h1>This is Heading 1 </h1>
        <h2>This is Heading 2</h2>
        <h3>This is Heading 3 </h3>
    </div>
);
 
ReactDOM.render(element, document.getElementById("root"));


//--------------Comment in JSX---------------------------
const element = (
    <div>
        <h1>Hello World !{/*This is a comment*/}</h1>
    </div>
);

//----------------Converting HTML to JSX-------------------
//Html code:
 
Let us take the following HTML Code and Convert it into JSX
<!DOCTYPE html> 
<html> 
 
<head> 
    <title>Basic Web Page</title> 
</head> 
<body> 
    <h1>Welcome to GeeksforGeeks</h1> 
    <p>A computer science portal for geeks</p> 
</body> 
 
</html>

//JavaScript code:
//The Converted JSX Code will look like:
<>
  <title>Basic Web Page</title>
  <h1>Welcome to GeeksforGeeks</h1>
  <p>A computer science portal for geeks</p>
</>

//Rules to Write JSX
1. Always return a single Root Element: When there are multiple elements in a component and you want to return
all of them wrap them inside a single component
2. Close all the tags: When we write tags in HTML some of them are self closing like the <img> tag but JSX 
requires us to close all of them so image tag will be represented as <img />
3.Use camelCase convention wherever possible: When writing JSX if we want to give class to a tag we have to 
use the className attribute which follows camelCase convention.


----------------------React Elements---------------------------------
1. Class Element Attributes Ex: <div className= “exampleclass”></div>

//to add the inline css in react element
2. Style Element Attributes Ex. <div style= {{styleName: Value}}</div>

3. Fragments Ex. <>//Other Components</>


---------------------------------------------------------------------------------------------------------
										React Fragment 
---------------------------------------------------------------------------------------------------------
A React Fragment is a lightweight wrapper that allows you to group multiple elements without adding an extra 
DOM node. It helps keep the DOM structure clean and prevents unnecessary wrapper elements like <div>.

Instead of wrapping multiple elements in a <div>, you can use a <React.Fragment> or the shorthand <>...</> syntax.

Example :
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>This is a paragraph inside a fragment.</p>
    </React.Fragment>
  );
}

export default MyComponent;

Example: 
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>This is a paragraph inside a fragment.</p>
    </>
  );
}


----------------------ReactJS Import and Export----------------------
1. Importing Default exports Ex. import MOD_NAME from “PATH”

2. Importing Named Values    Ex. import {NAME} from “PATH”

3. Multiple imports 		 Ex. import MOD_NAME, {NAME} from “PATH”

4. Default Exports 			 Ex. export default MOD_NAME

5. Named Exports 			 Ex. export default {NAME}

6. Multiple Exports 		 Ex. export default {NAME1, NAME2}


----------------------- React Components ----------------------------
In React, a component is a fundamental building block used to create user interfaces. Components 
encapsulate parts of the UI and define how they should look and behave. Each component can be thought
of as a reusable, self-contained piece of code that can include HTML, JavaScript, and CSS.

or

React Components are the building block of React Application. They are the reusable code blocks
containing logics and and UI elements. They have the same purpose as JavaScript functions and 
return HTML. 

1. Functional Component:-
Functional components are simpler and are defined as JavaScript functions. They receive props as an argument and
return JSX to describe the UI. With the introduction of React Hooks, functional components have become more powerful 
and can now handle state and side effects, which were previously only possible in class components.

import React from "react";
function FirstComp(){
    return (
        <>
        <h1>This is the first componets</h1>
        </>
    )
}
export {FirstComp}

2. Class-based Component:-
Class components are more traditional and are defined as JavaScript classes that extend from React.Component. 
They must have a render method that returns JSX. Class components can manage state and lifecycle methods, which
are used to handle side effects and other operations.

class Democomponent extends React.Component {
   render() {
       return <>
	   //CODE</>;
	   </>
   }
}

----------------------- how to import Components ----------------------------
App.js 
import { FirstComp } from "./FirstComp";
function App() {
	return(
	<>
	<FirstComp/>
	</>
	)
}
----------------------- how to used bootstrap in react ----------------------------
>npm i bootstrap 
//when install the bootstrap then add the bootstrap in package.json file 

//then import the main.js file

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

----------------------- how to used react bootstrap in reactjs project----------------------------
>npm i react-bootstrap
//when install the react-bootstrap then add the react-bootstrap in package.json file 
//react bootstrap documents
https://react-bootstrap.netlify.app/docs/getting-started/introduction

import { Row, Col, Container } from 'react-bootstrap';
<Container fluid className="border border-1 ">
         <Row>
             <Col md='12' className="text-center my-2">
                      <h1>OUR COURSES</h1>
              </Col>
          </Row>
</Container>

----------------------How to used style Component in React--------------------------
//Install style Component in you current project 
<<<<<<< HEAD
-->npm i styled-components
=======
npm i styled-components
>>>>>>> c3f3741d0a93e77ff4ace7c8f7cb656a312fdd00

simple example:

const Title = styled.h1`
    font-size:40px;
    text-align:center;
    color:red;
    background-color:yellow;   
    `;

<Title>Hello World</Title>
----------------------- How to used fontawesome in React ----------------------------
 //install the core package 
>npm i --save @fortawesome/fontawesome-svg-core


npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons


--install the Font Awesome React component:
npm i --save @fortawesome/react-fontawesome@latest

//how to used in react Component
import {faWhatsapp } from '@fortawesome/free-brands-svg-icons';
<FontAwesomeIcon icon={faWhatsapp} className='fs-5 text-success'/><br />


----------------------- How to used Tailwind css ---------------------------------------
--step-1 Install Tailwind CSS
>npm install -D tailwindcss
>npx tailwindcss init

-- step-2 Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

--step-3 Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

----------------------- How to used images and css files ---------------------------------------
//External css file
--import "./CSS/faqitems.css";

//Images add in component
--import weblog from "./images/bg.jpg";
   <img src={weblog} />
   
   
----------------------- How to add inline css and External css --------------------------------------
//first you have to import css file
import "./FAqItems.css";

//then you have to add className in element

//inline css
 <button style={{
                padding: "10px",
                color: 'red',
                border: '1px solid black',
                background: 'lightpink'
}}>Inline Css Button</button> 

//or 
// inline css object 
    let buttonStyle  = {
        padding: "10px",
        color: 'red',
        border: '1px solid black',
        background: 'lightpink'
    }
 <button style={buttonStyle}>Inline Css Button</button>
 
 
 
{/* ----------------------------------How to create module style------------------------------------------------ */}
//Create the CSS module with the .module.css extension, example: Button.module.css 
{/* then import module in app.js file
import btnmodule from "./Button.module.css" */}

//Inside Button.module.css file
.error{
	color:red;
}

.success{
	color:green;
}

//used to module in html tags
<button className={btnmodule.error}>Delete</button>
<button className={btnmodule.success}>Submit</button>


--------------------------------------------Nofification Component------------------------------------------
--Install Notificatiion Component
--> npm install react-notifications-component


----------------------------------- props in React----------------------------------------
/* 
Props is short for properties and they are used to pass data between React components. React’s data flow 
between components is uni-directional (from parent to child only).

*/

//pass props data in Footer Component file
function App(){
	let f_name = "xyz";
	let l_name = "abc"
	return(
	<Footer data={{ f_name, l_name }}>
	)
}

--Footer.js
function Footer(props) {
    return (
        <>
            <h1>Footer Section</h1>
            <h2>{props.f_name}</h2>
            <h2>{props.l_name}</h2>
            
        </>
    )
}
export { Footer }

----------------------------------- props destructers----------------------------------------
function Footer({f_name,l_name}) {
    return (
        <>
            <h1>Footer Section</h1>
            <h2>{f_name}</h2>
            <h2>{l_name}</h2>
        </>
    )
}
export { Footer }


-------------------------------------- Props Drilling -----------------------------------------
Props drilling in React refers to the process of passing data (props) from a parent component to
its child components, and further down the component tree, until the data reaches the component
that needs it.

Example:
function Grandparent() {
  const user = { name: "John", age: 30 };
  
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <Grandchild user={user} />;
}

function Grandchild({ user }) {
  return <p>{user.name} is {user.age} years old.</p>;
}

----------------------------------------State in Reactjs ---------------------------------------------
/*
React has another special built-in object called state, which allows components to create and 
manage their own data. So unlike props, components cannot pass data with state, but they can 
create and manage it internally
*/

class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    

    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}

------------------------------------React ES6 --------------------------------------------------
-----React ES6 -- Arrow Functions
Arrow functions allow us to write shorter function syntax:
Example:
	Before:

	hello = function() {
	  return "Hello World!";
	}
	
Example:
With Arrow Function:

	hello = () => {  
	  return "Hello World!";
	}

-----React ES6 Variables
let and const Keywords (ES6+)

* Block-Scoped: Both let and const are block-scoped, meaning their scope is limited to the block ({ ... }) 
in which they are defined, including for, if, and while blocks.

* let for Mutable Variables: Variables declared with let can be reassigned.

* const for Constants: Variables declared with const cannot be reassigned. However, for objects and arrays
declared with const, their properties or elements can be mutated.

-----React ES6 Array Methods
Example:
Generate a list of items from an array:

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)


<<<<<<< HEAD
--------------------------------Reactjs Hooks Rules----------------------------------------------
1. Hooks let you use diffrent react Features from your component
2. It start with use__(useState,useEffect,useReducer)
3. Hooks can only  be used at the top level of your component
4. Do not call hooks inside loops,conditions or nested function
5. Call hooks only from react function component or custom hook. do not call hooks from regular JavaScript
function or in class component.
6. You can also Create you own custom hooks by creating function starting with ___use ensure that 
React that can identify it as a hook. (ex useFetch,useForm).

# useState() hooks ------------------------------------------------------------------------------
The useState hook is a fundamental hook in react that allows you to add state management to your 
functionl Components. It lets you store and update values that change over time, enabling dynamic
and interactive user interfaces.


#useState() hooks() ---------------------------------------------------------------------------
What it is:
useState is a hook that lets you add state to functional components. State is a way to store values that 
can change over time, and useState allows you to manage these values.

How it works:
You call useState and pass the initial state as an argument. It returns an array with two elements: the 
current state and a function to update that state.

Example:

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable called "count" and a function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


#useEffect() hooks ------------------------------------------------------------------------------
What it is:
useEffect is a hook that lets you perform side effects in your components. Side effects are operations 
like data fetching, subscriptions, or manually changing the DOM.

How it works:
You call useEffect and pass it a function that contains the code for the side effect. You can also 
specify dependencies, which determine when the effect runs.

Example:
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // useEffect runs after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    // Cleanup function (optional)
    return () => {
      console.log("Cleanup before the next effect");
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;


#useRef() hooks ---------------------------------------------------------------------------------



#forwardRef() hooks ---------------------------------------------------------------------------------
React forwardRef allows parent components to move down (or "forward") refs to their children. It 
gives a child Component a reference to DOM entity Created by its parent Component in React. This 
helps the child to read and modify the element from any Location where it is used.

or
This is a higher-order component that allows you to forward a ref from a parent component to a 
child component.

The BeforReact19Input component is created using forwardRef, which takes props and ref as 
arguments. This allows the parent component (ForwardRef) to attach refs to the input fields.


#useId hooks() ---------------------------------------------------------------------------------

Example:
# Parent Component
export const ForwardRef = () => {
    const username = useRef(null);
    const password = useRef(null);

    const handlerFormSubmit = (e) => {
        e.preventDefault()
        console.log(username.current.value);
        console.log(password.current.value);

    }
    return (
        <>
            <form action="" onSubmit={handlerFormSubmit}>
                <BeforReact19Input label="username" ref={username} /> <br /><br />
                <BeforReact19Input label="password" ref={password} />
                <br />
                <button>submit</button>
            </form>
        </>
    )
}

# Child component
const BeforReact19Input = forwardRef((props, ref) => {
    const id = useId();

    return (
        <>
            <label htmlFor={id}>{props.label}</label>
            <input type="text" ref={ref} />
        </>
    )
});


React.memo()-----------------------------------------------------------------------------------------------
React.memo is a higher-order component used in React to optimize functional components by preventing 
unnecessary re-renders. It does this by memoizing the component and only re-rendering it if its props 
change.


1. React.memo Dependencies
When you wrap a component with React.memo, it checks if the props passed to the component have changed. 
If the props remain the same (i.e., they are "equal"), the component will not re-render.

useMemo() --------------------------------------------------------------------------------------------------
What is useMemo?
useMemo is a React hook that memoizes the result of a computation. It allows you to optimize performance by 
preventing expensive calculations from being repeated on every render when the dependencies have not changed.


2. useMemo Dependencies
When using useMemo, you provide an array of dependencies as the second argument. The memoized value will only
be recalculated if one of these dependencies changes.
 
-------------------------------Short Circuit Evaluation in React ----------------------------------
# Logical Or (||)
syntax: expression || expression2
if expression1 is true , return expression1 Otherwise, return expression2

# Logical And (&&)
syntax: expression1 && expression2
if expression1 is false , return expression1 Otherwise, return expression2.

# Nullish coalescing(??)
syntax: expression1 ?? expression2
if expression is not null or undefined, return expression1, Otherwise return expression2.
>>>>>>> c3f3741d0a93e77ff4ace7c8f7cb656a312fdd00

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

-----------------------------------------Reactjs Route's--------------------------------------------
Step 1: Install react-router-dom
--> npm install react-router-dom

Step 2: Create Components for Each Page
Create separate components that will act as different pages in your application.

In the src folder, create a components folder. Inside it, create the following files:

Home.js
About.js
Contact.js

Step 3: Set Up Routing in App.js
Open your App.js file, import the necessary modules from react-router-dom, and set up the routes.


   <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
 


Step 4: 
// use nav link in component

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}





--> index.js
const route = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },

  {
    path:"about",
    element: <About/>
  },

  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"form",
    element: <Form/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route}/>
);

-->Navbar.js 
         <ul>
            <li><Link to={"/"}> Home</Link></li>
            <li><Link to={"/about"}> About</Link></li>
            <li><Link to={"/contact"}> Contact</Link></li>
            <li><Link to={"/form"}> Contact</Link></li>
         </ul>
		 
--------------------------------------------------------------------------------------------------
* Dynamic Routing in React: Get Params value and Fetch API data 
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
* handle Contact Form Data : with React Router Form Component And Action 
--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------





--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------






--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------



--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
