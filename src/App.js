// import logo from './logo.svg';

import { useState ,useEffect} from 'react';
import './App.css';
import "./style.scss";
import "./media-query.css";


import {Routes,Route,useNavigate ,Navigate} from "react-router-dom";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import AddEditBlog from './Pages/AddEditBlog';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Header from './components/Header';
import Auth from './Pages/Auth';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function App() {
  const [active,setActive]=useState("home");
  const [ user,setUser] =useState(null);

  const navigate=useNavigate();


  useEffect(()=>{
          auth.onAuthStateChanged((authUser)=>{
            if(authUser){
              setUser(authUser)

            }else{setUser(null)}
          })
  },[])
  
   const handleLogout = ()=> {
    signOut(auth).then(()=>{
      setUser(null);
      setActive("login");
      navigate("/auth");
    });

   };



  return (
    <div className="App">
      <Header setActive= {setActive} active= {active} user={user} handleLogout={handleLogout}  />
      <ToastContainer  position="top-center"/>
      <Routes>
       
        <Route path="/" element={<Home setActive={setActive} user={user}    />} />

        
        <Route path="/detail/:id" element={<Detail  setActive={setActive}  />} />
        <Route path="create" element={  user?.uid ?< AddEditBlog  user={user} /> :<Navigate to="/" />}  />
        <Route path="/update/:id" element={  user?.uid ?< AddEditBlog  user={user}   setActive={setActive}  /> :<Navigate to="/" />} />
        <Route path="/about" element={<About/>} />
        <Route path="/auth" element={<Auth   setActive={setActive} setUser={setUser} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
