import React from 'react'
import { useState } from 'react';
import fetchData from './fetchData';
import Tem from './components/Tem' ;

let b = false;

const App = () => {

   const [data, setData] = useState(null);

   const check = async () => {
      try {
         const d = await fetchData('silchar');
         setData(d);
      }
      catch (err) {
         console.error(err);
      }
   };
   // check();

      // console.log(data); b = true;


   return (
      <div className="flex flex-col w-screen h-screen bg-gray-600 p-20 text-white">
         HEllo
         <Tem weather = { data } />
      </div>
   )
}

export default App;












// const name = 'h-screen w-screen bg-zinc-800 font-bold flex justify-center'
// const App = () => {

//    const [time, set] = new useState(new Date().toLocaleTimeString());
//    const setTime = () => {
//       set(new Date().toLocaleTimeString());
//    }
//    setInterval(setTime, 1000);
//    return (
//      <div className={name} >
//          <div className="my-[10rem] flex flex-col text-center">

//             <button className="bg-zinc-400 rounded text-3xl text-lime-400 cursor-pointer py-4"
//                onClick={setTime}
//             >Get Time</button>
//            <p className='text-lime-100 mt-4 text-5xl text-center '
//            >
//               {time}
//            </p>
//         </div>
//      </div>
//   )
// }

// export default App