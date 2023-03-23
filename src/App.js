import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import CityDetail from "./components/CityDetail";
import Card from "./components/Card";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <>
      {" "}
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<SearchForm />}></Route>
          <Route path="/detail" element={<Card />}></Route>
        </Routes>
        <CityDetail />
      </div>
    </>
  );
}

export default App;
