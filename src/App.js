import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useQuery, gql } from "@apollo/client";


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

      <div className='mt-20 mx-20 relative '>
        {blogList?.map((blog) => {
          return (
            <div className='flex justify-center'>
              <div style={{ zIndex: 9998 }} className='h-40 w-3/4 mb-10 bg-[#181622] cursor-pointer border border-white border-opacity-30 rounded-xl hover:scale-[1.03] hover:transition duration-200 hover:duration-200'>
                <p className='text-3xl text-white mt-5 ml-5'>{blog?.title}</p>
                <p className='text-base mt-3 ml-5 text-white text-opacity-50'> {blog?.content.slice(0, 300)}...</p>
              </div>
            </div>
          )
        })
        }
      </div>

      <div className='h-20 w-20 cursor-pointer bg-[#181622] hover:transition duration-200 hover:duration-200 hover:scale-[1.08] border border-white border-opacity-30 rounded-full fixed bottom-8 right-8 flex items-center justify-center text-white'>
        <FontAwesomeIcon icon={faPen} size="2x" />
      </div>
    </div>
  );
}

export default App;
