import { Route, Routes } from 'react-router';
import CardsGallery from './components/CardsGallery';
import { useState, createContext } from "react";

export const MyContext = createContext();

function App() {
  const [isLoader, setIsLoader] = useState(false);
  
  return (
    <MyContext.Provider value={{setIsLoader}}>
      <Routes>
        <Route path="/" element={<CardsGallery />} />
      </Routes>
      {isLoader &&
        <div className="loaderFrame">
          <div className="loader">
          </div>
        </div>}
    </MyContext.Provider>
  )
}

export default App
