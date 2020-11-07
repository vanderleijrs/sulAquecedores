import React from 'react'
import './App.css'
import Menu from './Menu/Index'
import CarouselC from './Carousel/Index'
import JustText from './JustText/index'
import FolderSquare from './FolderSquare/FolderSquare'
function App() {
  return (
    <div className="App">
       <main className="App-content">
        <Menu/>
        <CarouselC/>
        <JustText/>
        <FolderSquare></FolderSquare>
       </main>
    </div>
  );
}

export default App;
