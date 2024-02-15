import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import Blogs from './Components/Blogs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import Blog from './Components/Blog';
import { BlogContext } from './Context';
import { BLOGS_QUERY } from './Queries';


function App() {

  const [blogList, setBlogList] = useState([])
  const [blog, setBlog] = useState({})
  const { data } = useQuery(BLOGS_QUERY);

  useEffect(() => {
    if (data) {
      console.log("check blog resp -->", data?.blogs)
      setBlogList(data?.blogs)
    }
  }, [data])


  useEffect(() => {
    return init();
  }, []);

  const obj = {
    setBlog,
    blog
  }

  return (
    <div>
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
            <Route path="/" element={<Blogs blogList={blogList} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/createBlog" element={<Create />} />
          </Routes>
        </Router>
      </BlogContext.Provider>
    </div>
  );
}

export default App;
