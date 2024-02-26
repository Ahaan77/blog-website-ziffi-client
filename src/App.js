import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import Blogs from './Components/Blogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Blog from './Components/Blog';

function App() {

  useEffect(() => {
    return init();
  }, []);

  return (
    <div className='font-mono'>
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
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/createBlog" element={<Create />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
