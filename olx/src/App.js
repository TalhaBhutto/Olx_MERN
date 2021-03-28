import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomePage from "./Home";
import Header from "./Header";
import "./Props.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component={HomePage}></Route>
    </BrowserRouter>
  );
}

export default App;
