// Importing necessary modules from React
import React, {useState, useEffect} from 'react';
// Importing CSS for the component
import './hero.css';

// Defining a functional component 'ContentBoxes'
const ContentBoxes = () => {
    // The component returns JSX to be rendered
    return (
        // A div container with class 'content'
        <div className="content">
            // Three div elements representing content boxes
            <div className="box1">Box 1 content</div>
            <div className="box2">Box 2 content</div>
            <div className="box3">Box 3 content</div>
        </div>
    );
};

// Defining a functional component 'Hero'
const Hero = () => {

    // Using React's useState hook to create state variables 'title' and 'description' and functions to update them
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Using React's useEffect hook to fetch data from '/data.json' when the component mounts
    useEffect(() => {
        fetch('/data.json') // Fetching data from '/data.json'
            .then(response => response.json()) // Parsing the response to JSON
            .then(data => {
                setTitle(data.title); // Setting the 'title' state variable with the 'title' property from the fetched data
                setDescription(data.description); // Setting the 'description' state variable with the 'description' property from the fetched data
            })
            .catch(error => console.error('Error Loading resource:', error)); // Logging any errors to the console
    
        }, []); // The dependency array is empty, so this effect runs once on mount and not on updates

    // The component returns the following JSX to be rendered
    return (
        <section className="hero">
        <h1>Welcome to Your Scheduling App</h1>
        <p>Manage your tasks and appointments with ease.</p>
        <ContentBoxes /> // Including the 'ContentBoxes' component
        </section>
    );
};

export default Hero;
