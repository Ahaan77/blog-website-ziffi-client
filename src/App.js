import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import Blogs from './Components/Blogs';
import CreateButton from './Components/CreateButton';


function App() {

  const [blogList, setBlogList] = useState([])

  const BLOGS_QUERY = gql`
  {
    blogs{
      title
      id
      content
    }
  }  
`;

  const { data, loading, error } = useQuery(BLOGS_QUERY);

  useEffect(() => {
    if (data) {
      console.log("check blog resp -->", data?.blogs)
      setBlogList(data?.blogs)
    }
  }, [data])


  useEffect(() => {
    return init();
  }, []);

  return (
    <div>
      <Topbar />

      {/* Moving bg */}

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
      <Blogs blogList={blogList} />
      <CreateButton />
    </div>
  );
}

export default App;
