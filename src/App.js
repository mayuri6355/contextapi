import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Home from './Home';
const rno = "12";

export const UserContext = createContext();
function App() {

  const [user,setuser] = useState('cdmi');
  return (
    <div className="App">
    
      <UserContext.Provider value={{"name":user,"rno":rno}}>

            <Home/>

      </UserContext.Provider>


      
      
    </div>
  );
}

export default App;
