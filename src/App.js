import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import { useState } from 'react';
import Blogs from './Components/Blogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Blog from './Components/Blog';
import { BlogContext } from './Context';

function App() {

  const [blog, setBlog] = useState({})

  useEffect(() => {
    return init();
  }, []);

  const obj = {
    setBlog,
    blog
  }

  return (
    <div className='font-mono'>
      <BlogContext.Provider value={obj}>
        <Topbar />
        <div className=''>
          <canvas
            style={{
              position: "absolute",
              zIndex: 0,
              width: "100%",
              height: "100%"
            }}
            id="canvas"
          ></canvas>
        </div>
        <Router>
          <Routes>
            {/* Moving bg */}
            <Route path="/" element={<Blogs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/createBlog" element={<Create />} />
          </Routes>
        </Router>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
