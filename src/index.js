import React from "react";
import ReactDOM from 'react-dom';
import "./css/reset.css";
import "./css/style.css";
import OpeningPage from "./OpeningPage";
import Flashcards from './Flashcards';

import "./midia/logo.png"

export default function App() {

    const [start, setStart] = React.useState('OpeningPage');
    const [arrEmojis, setArrEmojis] = React.useState([]);
    let [numQuestions, setNumQuestions] = React.useState(0);
    let [notZap, setNotZap] = React.useState(0);

    return (
        <>
            {
                start === 'OpeningPage' ? (<OpeningPage setStart={setStart} />) : (<Flashcards
                    setArrEmojis={setArrEmojis}
                    arrEmojis={arrEmojis}
                    setNotZap={setNotZap}
                    notZap={notZap}
                    numQuestions={numQuestions}
                    setNumQuestions={setNumQuestions} />
                )}
        </>

    );
}

const element = document.querySelector(".root");
ReactDOM.render(<App />, element);