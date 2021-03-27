import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import HeaderPage from "./Home";


function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={HeaderPage}></Route>
    </BrowserRouter>
  );
}

export default App;
