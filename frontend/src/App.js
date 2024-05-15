// Importing required components
import Signup from "./components/signin";
import Login from "./components/Login";
import Scheduler from "./components/scheduler";

// Defining the App component
function App () {
    // Using React's useState hook to create a state variable 'schedule' and a function to update it 'setSchedule'
    const [schedule, setSchedule] = useState([]);

    // Returning the JSX to be rendered
    return (
        // Using React Router to manage the different routes of the application
        <Router>
            <div className="App">
                <Header />  {/* Header component */}
                <Routes>  {/* Defining the routes */}
                <Route path="/" element={<Hero />} />  {/* Home route */}
                <Route path="/schedule" element={<Schedule />} />  {/* Schedule route */}
                <Route path="/calendar" element={<MyComponent />} />  {/* Calendar route */}
                <Route path="/stats" element={<Stats schedule={schedule} />} />  {/* Stats route, passing 'schedule' as a prop */}
                <Route path="/about" element={<About />} />  {/* About route */}
                <Route path="/Signup" element={<Signup />}/>  {/* Signup route */}
                <Route path="/Login" element={<Login />}/>  {/* Login route */}
                <Route path="/Scheduler" element={<Scheduler />}/>  {/* Scheduler route */}
                </Routes>
                <Footer />  {/* Footer component */}
            </div>
        </Router>
    );
}

// Exporting the App component to be used in other parts of the application
export default App;