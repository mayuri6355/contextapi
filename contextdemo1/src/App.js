import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import Home1 from './home1';
const rno="7"

export const UserContext= createContext();

function App() {
  const [user,setuser]=useState('cdmi');
  return (
    <div className="App">
      <UserContext.Provider value={{"name":user, "rno":rno}}><Home1/></UserContext.Provider>
    
    </div>
  );
}

export default App;
