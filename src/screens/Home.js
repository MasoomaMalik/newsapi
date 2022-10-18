import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import DrawerAppBar from '../components/DrawerAppBar';

const Home = () => {
   let navigate= useNavigate();
   let move = ()=>{
    navigate('/Blog')
   }
  return (
    <>
   <DrawerAppBar/>
   <div>Home</div>

<button onClick={()=>{move()}}>Got to blog from home</button>
    {/* <div>
    <Link to='/'>Home</Link>
    <Link to='Pricing'>Pricing</Link>
    <Link to='Blog'>Blog</Link>
    <Link to='Products'>Products</Link>
</div> */}
    </>
  )
}

export default Home