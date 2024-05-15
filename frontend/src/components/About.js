// Importing React library
import React from "react";

// Defining a functional component 'About'
const About = () => {
    // The component returns JSX to be rendered
    return (
        // A div container with class 'contact-info'
        <div className="contact-info">
            // A paragraph element displaying contact email
            <p>Contact: contact@example.com</p>
            // Anchor elements linking to various social media platforms
            <a href="https://example.com">Facebook</a>
            <a href="https://example.com">Twitter</a>
            <a href="https://example.com">Instagram</a>
        </div>
    )
}

// Exporting the 'About' component to be used in other parts of the application
export default About;