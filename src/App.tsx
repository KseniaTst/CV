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
    return (
        <div className="App">
            {/*<Header/>*/}
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
