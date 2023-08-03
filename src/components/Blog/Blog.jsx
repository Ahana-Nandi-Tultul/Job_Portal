import React from 'react';

const Blog = () => {
    return (
        <div className='w-full py-14 px-6'>
            <h1 className='text-4xl font-bold text-center mb-6'>Answer of the Questions</h1>
            <div className='mb-4'>
                <h2 className='text-3xl mb-2'>Q1. When should you use context API?</h2>
                <p><strong>Ans: </strong>The Context API is a feature provided by React, a 
                JavaScript library for building user interfaces. It is used to manage global 
                state in a React application and allows us to pass data down the component tree 
                without manually passing props through each level of components. We can use context api for:
                <strong>managing global state</strong>, <strong>avoiding prop drilling</strong>, 
                <strong>cross-component communication</strong> means when we components that does not have parent
                child relationship but these components need to communicate or pass data. Those are the common 
                scenarios when we use Context API.</p>
            </div>
            <div className='mb-4'>
                <h2 className='text-3xl mb-2'>Q2. How does useState work?</h2>
                <p><strong>Ans: </strong> In React, useState is a hook that allows functional components to have state. It provides a way to store
                 and update state in a functional component, similar to how state is managed in class components. 'useState'
                 provides a container and a function to update value of that specific container. We can use the same state in
                 whatever component we pass the state by props passing or context api. </p>
            </div>
            <div className='mb-4'>
                <h2 className='text-3xl mb-2'>Q3. What is useRef?</h2>
                <p><strong>Ans: </strong>'useRef' is a hook in React that allows us to store state which value
                update will not cause the re-render of the page and will be persist through the rerender. 
                It stores the mutable form of state. It helps the application faster and helps in caching and
                storing previous values.</p>
            </div>
            <div className='mb-4'>
                <h2 className='text-3xl mb-2'>Q4.  What is useMemo?</h2>
                <p><strong>Ans: </strong>'useMemo' is hook in react that allows us to return a memorized value.
                This hook memories the output of function for a set of input. </p>
            </div>
        </div>
    );
};

export default Blog;