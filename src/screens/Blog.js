import React from 'react'
import { Link } from 'react-router-dom'
import DrawerAppBar from '../components/DrawerAppBar'

const Blog = () => {
  return (
    <>
   <DrawerAppBar/>
   <div>Blog</div>

    {/* <div>
    <Link to='/'>Home</Link>
    <Link to='/Pricing'>Pricing</Link>
    <Link to='/Blog'>Blog</Link>
    <Link to='/Products'>Products</Link>
</div> */}
    </>
  )
}

export default Blog