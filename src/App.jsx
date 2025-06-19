import { Route, Routes } from 'react-router';
import CardsGallery from './components/CardGallery/CardsGallery';
import { useState, createContext } from "react";
import Header from "./components/Header/Header";

export const MyContext = createContext();

function App() {
  const [isLoader, setIsLoader] = useState(false);
  
  return (
    <MyContext.Provider value={{setIsLoader}}>
      <Header/>
      <Routes>
        <Route path="/" element={< CardsGallery/>} />
        <Route path="/about" element={<div/>} />
      </Routes>
      {isLoader &&
        <div className="loaderFrame">
          <div className="loader"/>
        </div>}
    </MyContext.Provider>
  )
}

export default App
