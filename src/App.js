import './App.css';
import Appbar from './components/Appbar'
import Employee from './components/Employee';
import Employees from './components/Employees';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">


      <Appbar />


      <Routes>
        <Route path='/addEmployee' element={<Employee />}/>     
        <Route path='/employees' element={<Employees />}/> 
      </Routes>

      
    </div>
  );
}

export default App;
