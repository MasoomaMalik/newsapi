// import './App.css';
// import {Router, Link } from 'react-router-dom';
import ResponsiveAppBar from './components/DrawerAppBar';
import AppRouter from './config/route';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
  

function App() {
  return (
   <>
   {/* <div>
    <Router>

    <Link to='/'>Homee</Link>
    <Link to='Pricing'>Pricingg</Link>
    <Link to='Blog'>Blogg</Link>
    <Link to='Products'>Productss</Link>
    </Router>
</div> */}
   <AppRouter/>
   </>
  );
}

export default App;
