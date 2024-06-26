// Importing required modules
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Creating an express app
const app = express();

// Using cors middleware to allow cross-origin requests
app.use(cors());

// Using express.json middleware to parse JSON requests
app.use(express.json());

// Creating a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',  // connection address (localhost).
    user: 'root',      // database's username.
    password: '',        // database's password.
    database: 'signup'  // database's name.
});

// POST endpoint for user signup
app.post('/signup', (req, res) => {
    // Hash the password before storing it
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Error hashing password.' });
        }

        // SQL query to insert new user into the database
        const sql = "INSERT INTO login (name, email, password) VALUES (?)";
        const values = [
            req.body.name,
            req.body.email,
            hash  // Store the hashed password
        ];

        // Executing the SQL query nb: when you want to add to the db, you have to treat the values as an array i.e [value] as opposed to 'value'
        db.query(sql, [values], (err, data) => {
            // If there's an error, log it and send a 500 response
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Database error during signup.' });
            }

            // If everything went well, send a 200 response
            return res.status(200).json({ message: 'Signup successful.' });
        });
    });
});
// POST endpoint for user login
app.post('/login', (req, res) => {
    // SQL query to find the user in the database
    const sql = "SELECT * FROM login WHERE email = ?";
    const values = [req.body.email]
    // Executing the SQL query
    db.query(sql, values, (err, data) => {
        // If there's an error, send a 500 response
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Database error during login.' });
        }

        console.log('Database query result:', data);
        // If no user is found, send a 401 response
        if (data.length === 0) {
            return res.status(401).json({ message: 'Login failed.' });
        }

        // Compare the hashed password with the plain text password from the request
        bcrypt.compare(req.body.password, data[0].password, function(err, result) {
            if (err) {
                console.log(err)
                return res.status(500).json({ error: 'Error during password comparison.' });
            }
            // If the passwords match, send a 200 response
            if (result) {
                return res.status(200).json({ message: 'Login successful.' });
            }
            // If the passwords don't match, send a 401 response
            else {
                return res.status(401).json({ message: 'Login failed.' });
            }
        });
    })
})

//use post to add data to the database 
app.post('/create', (req, res) => {
    const sql = "INSERT INTO schedule (date, activity) VALUES (?)";
    const values = [
        req.body.date,
        req.body.activity
    ]
    //query to insert data into the database with the values as an array
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Database error.' });
        }
        // If everything went well, send a 201 response
        return res.status(201).json({ message: 'successful.' });
    })
})

//use get to retrieve data from the database on a custom route
app.get('/view/:id?', (req, res) => {
    let sql;
    let values;

    if (req.params.id) {
        // If id is provided, select the specific post
        sql = "SELECT * FROM schedule WHERE id = ?";
        values = [req.params.id];
    } else {
        // If id is not provided, select all posts
        sql = "SELECT * FROM schedule";
    }

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({error: "Error extracting from database"});
        }
        return res.status(200).json({message: 'Successful', data: data});
    });
});

//connect this to the frontend update button
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE schedule SET date = ?, activity = ? WHERE id = ?";
    const values = [
        req.body.date,
        req.body.activity,
        req.params.id
    ]

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({error: "error updating database"});
        }
        return res.status(201).json({messge: 'Successful'});
    })
})

//connect this to the frontend delete button
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM schedule WHERE id = ?";
    const values = [req.params.id]

    db.query(sql, values, (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500).json({error: "error deleting from database"});
        }
        return res.status(201).json({messge: 'Successful'});
    })
})

// Setting the port for the server
const PORT = process.env.PORT || 8081;

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});