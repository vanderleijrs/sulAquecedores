import React from 'react'
import './App.css'
import Menu from './Menu/Index'
import CarouselC from './Carousel/Index'
import JustText from './JustText/index'
function App() {
  return (
    <div className="App">
       <main className="App-content">
        <Menu/>
        <CarouselC/>
        <JustText/>
       </main>
    </div>
  );
}

export default App;
