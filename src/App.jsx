import './App.css'
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';


function App () {
  return (
    <div className="App">
      <NavBar />
      <main className="main-container">
        
        <Outlet />
        
      </main>
  </div>
      
    
   
  );
};


export default App
