import { Suspense } from 'react';
import './App.css'
import Banner from './components/homepage/banner/banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/players/Players';

const fetchPlayer = async () =>{
  const res = await fetch("/data.json");
  return res.json();
}


function App() {

  const playersPromise = fetchPlayer();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <Players playersPromise={playersPromise}/>
      </Suspense>
    </>
  )
}

export default App
