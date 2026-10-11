import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () =>{
  const res = await fetch("/data.json");
  return res.json();
}


function App() {

  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
      </Suspense>

      <ToastContainer />
    </>
  )
}

export default App
