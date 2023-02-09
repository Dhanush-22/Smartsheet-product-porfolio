import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Guide from "./pages/guide/Guide";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" 
          element= {<Home/>} 
        />
         <Route path='/home' 
          element={<Navigate to="/"/>}
        />
        <Route exact path="/about" 
          element= {<About/>} 
        />
        <Route exact path="/guide" 
          element= {<Guide/>} 
        />
        <Route exact path="/Contact" 
          element= {<Contact/>} 
        />
        {/*
        <Route path='/register' 
          element={ user?<Navigate to="/"/> : <Register/>}
        />
        <Route path='/messenger' 
          element={ user?<Messenger/>:<Navigate to="/"/>}
        /> */}
        {/* <Route path='/profile/:username' element={<Profile/>}/> */}
        {/* <Route path='/profile/:username' 
          element={ user? <Profile/> : <Navigate to="/login"/>}
        />
        <Route path='/forgot' 
          element={ user? <Profile/> : <Forgot/>}
        /> */}
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
