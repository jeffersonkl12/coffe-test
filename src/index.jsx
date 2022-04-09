import {render} from "react-dom";
import './index.css';
import App from './App';
import "./reset.css";
import { BrowserRouter,  Routes,  Route } from "react-router-dom";
import PageOff from "./components/pageOff";
import Compra from "./compra";

render(

  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App/>}/>
      <Route path="compra" element={<Compra valor="25"/>}></Route>
      <Route path="*" element={<PageOff/>}/>
    </Routes>
  </BrowserRouter>
  ,

  document.getElementById('root')
);

