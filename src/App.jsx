import React, { useState } from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Main from './pages/emoticon/Main';
import Emoji from './pages/emoji/Emoji';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

const App = () => {

  const[isTitle, setTitle] = useState("Emoticon Convertor");
  const[isCompo, setCompo] = useState(<Main/>);
  const[isIcon, setIcon] = useState(faToggleOff);

  let changeTitle = () => {

    isTitle == "Emoticon Convertor" ? setTitle("Emoji Convertor") & setCompo(<Emoji />) & setIcon(faToggleOn)
    : setTitle("Emoticon Convertor") & setCompo(<Main />) & setIcon(faToggleOff);
  };
  
  return (
    <>
    <Nav heading={isTitle} faIcon={isIcon} clicking={changeTitle} />
    <div>{isCompo}</div>
    <Footer />
    </>
  )
}

export default App