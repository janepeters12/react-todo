import Header from "./components/Header";
import Tasks from './components/Tasks'
import  {useState}  from 'react'
import AddTask from './components/AddTask'


const App = () => {
  const [tasks, setTasks] = useState([

    { id: 1,
     text: 'Doctors Appointment',
     day: 'Feb 5th at 2:30pm',
     reminder: true,
 },
 
 {   id: 2,
     text: 'Meeting at School',
     day: 'Feb 6th at 1:30pm',
     reminder: true,
 },
 
 {   id: 3,
     text: 'Food shopping',
     day: 'Feb 5th at 2:30pm',
     reminder: false,
 }
 ])
//  delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id)  => {
  setTasks(tasks.map((task) => 
  task.id ===id ? { ...task, reminder: 
  task.reminder} : task
  )
  )
}



  return (
    <div className="container">
      <Header />
      <AddTask/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

    </div>
  );
}

export default App;
