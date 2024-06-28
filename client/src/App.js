import { Routes, Route } from "react-router-dom";
import './App.css';

//importamos la vista
import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import DetailPage from "./views/DetailPage/DetailPage";
import FormPage from "./views/FormPage/FormPage";


function App() {
  return (
    <div className="App">
      {/* {pathname !== '/' ? <NavBar /> : null} */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
