import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { init } from './Backgroud/Init';

function App() {

  useEffect(() => {
    return init();
  }, []);

  return (
    <div>
      <div className='h-20 border-b border-white border-opacity-20 sticky top-0 flex items-center justify-between'>
        <div className='text-white text-xl mx-10'>
          Blog Website
        </div>
      </div>
      <div className='w-full h-screen'>
        <canvas
          style={{
            position: "absolute",
            zIndex: 0,
            width:"100%",
            height : "100%"
          }}
          id="canvas"
        ></canvas>
      </div>
    </div>
  );
}

export default App;
