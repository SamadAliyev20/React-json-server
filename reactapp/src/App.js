import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AddUser from './pages/AddUser';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState, CSSProperties} from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import ScaleLoader from 'react-spinners/ScaleLoader';



const override: CSSPropeties = {
  display: "block",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)"
};

function App() {

  const [users,setUsers] =useState([]);
  const [loading, setLoading] = useState(true);
  const [value,setValue]=useState('');


  useEffect(() => {
  const getUsers= async () =>{
    const response = await axios.get(' http://localhost:3001/posts');
   
    setUsers(response.data)
    setLoading(false)
  }
  getUsers(); 
  },[])
  

  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     {
      loading ?
      <ScaleLoader
        color='#36d7b7'
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:<Routes>
      <Route path='/' element={<HomePage userList={users}/>} />
      <Route path='/add' element={<AddUser/>}/>
     </Routes>
     }
     </BrowserRouter>  
    </div>
  );
}

export default App;
