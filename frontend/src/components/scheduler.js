// Importing the useNavigate hook from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Defining a functional component 'Scheduler'
function Scheduler () {

    // Using React's useState hook to create state variables 'date' and 'activity' and functions to update them
    const [date, setDate] = useState('')
    const [activity, setActivity] = useState('')
    // Using the useNavigate hook to get the navigate function for programmatic navigation
    const navigate = useNavigate();

    // Defining a function 'handlesubmit' to handle form submission
    function handlesubmit(event) {
        event.preventDefault(); // Preventing the default form submission behavior
        // Making a POST request to 'http://localhost:8081/create' with the 'date' and 'activity' as data
        axios.post('http://localhost:8081/create', {date, activity})
        .then(res => {
            console.log(res); // Logging the response to the console
            navigate('/'); // Navigating to the home page
        }).catch(err => console.log(err)); // Logging any errors to the console

    }

  // The component returns the following JSX to be rendered
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handlesubmit}>
            <h2>Add Items</h2>
            <div className='mb-2'>
                <label htmlFor=''>Date</label>
                <input type='text' placeholder='Enter date' className='form-control' 
                onChange={e => setDate(e.target.value)}/> // Setting the 'date' state variable with the input value
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Activity</label>
                <input type='text' placeholder='Enter Activity' className='form-control' 
                onChange={e => setActivity(e.target.value)}/> // Setting the 'activity' state variable with the input value
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Scheduler;
