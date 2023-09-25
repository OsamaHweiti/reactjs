// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './component/about';
import Content from './component/content';
import Main from './component/main';
import NoMatch from './component/404';
// import FormExample from './component/State';
import SignupForm from './component/login.js';
import Calculator from './component/calc';
import Increment from './component/counter';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Main/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Content/>} />
  <Route path="/form" element={<SignupForm/>} />
  <Route path="/calc" element={<Calculator/>} />
  <Route path="/increment" element={<Increment/>} />



  <Route path="*" element={<NoMatch/>} />
</Routes>
</BrowserRouter>
  );
 

}

export default App;


// export default App;
//  npm install react-icons --save to download package