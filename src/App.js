
import React, { lazy ,Suspense } from 'react'
import './App.css';
// import Blog from './pages/Blog';
// import BlogPost from './pages/BlogPost';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HireDevloper from './pages/HireDevloper';



const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const HireDeveloper =lazy(()=> import("./pages/HireDeveloper"));
function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path='/HireDeveloper' element={<HireDeveloper/>} />
        </Routes>
      </Suspense>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
