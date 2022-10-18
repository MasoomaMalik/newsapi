import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
 
import Pricing from '../screens/Pricing';
import Articles from '../screens/Articles';
import ArticleDetail from '../screens/ArticleDetail';
import Blog from '../screens/Blog';
import Home from '../screens/Home';

export default function AppRouter() {
  return (
     <>
        {/* <div>
            <Link to='/'>Home</Link>
            <Link to='Pricing'>Pricing</Link>
            <Link to='Blog'>Blog</Link>
            <Link to='Products'>Products</Link>
        </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Articles/*" element={<Articles />} />
        <Route path="Pricing" element={<Pricing />} />
<Route path="ArticleDetail" element={<ArticleDetail />} />

        {/* <Route path="profile/:userName" element={<Profile />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
    
      </>
    
    )}