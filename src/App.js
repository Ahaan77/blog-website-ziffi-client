import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';
import Topbar from './Components/Topbar';
import { useState } from 'react';

function App() {

  const [blogList, setBlogList] = useState(["qsq", "dwd", "dwdwd", "wdhuw", "hdwjdjw", "dhwjd"])

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
                <p className='text-3xl text-white mt-5 ml-5'>Title of Blog post</p>
                <p className='text-base mt-3 ml-5 text-white text-opacity-50'> Inki pinki ponky</p>

              </div>
            </div>
          )
        })

        }


      </div>
    </div>
  );
}

export default App;
