import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Front} from "./Components/FrontPage/Front";
import {Skills} from "./Components/Skills/Skills";
import {Works} from "./Components/Works/Works";
import {Distance} from "./Components/DistanceWork/Distance";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

function App() {

    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
            // @ts-ignore
            document.getElementById("navbar").style.top = "0";
        } else {
            // @ts-ignore
            document.getElementById("navbar").style.top = "-90px";
        }}

    return (
        <div className="App">
            <Header/>
            <Front/>
            <Skills/>
            <Works/>
            <Distance/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
