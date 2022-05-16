import React from "react";
import Answers from './Answers';
import Footer from "./Footer";
import logo2 from './midia/logo2.png'
import flip from "./midia/Vector.png"
import Test from './Test';


export default function Flashcards({
    setArrEmojis,
    arrEmojis,
    setNumQuestions,
    numQuestions,
    setNotZap,
    notZap,
}) {
    function turncard(index) {
        cardArr[index].front = "question";
        setCardArr([...cardArr]);
    }

    function ShowAnswer(index) {
        cardArr[index].front = "answer";
        setCardArr([...cardArr]);
    }

    function updateEmojis(parameter) {
        setArrEmojis([...arrEmojis, parameter]);
    }
    function updateNumQuestions(p) {
        setNumQuestions((numQuestions = numQuestions + 1));
        if (p !== "correct") setNotZap((notZap = notZap + 1));
    }

    function correct(index) {
        let p = "correct";
        cardArr[index].front = "correct";
        setCardArr([...cardArr]);
        updateEmojis("checkmark-circle");
        updateNumQuestions(p);
    }

    function setwrong(index) {
        let p = "wrong";
        cardArr[index].front = "wrong";
        setCardArr([...cardArr]);
        updateEmojis("close-circle");
        updateNumQuestions(p);
    }
    function setalmost(index) {
        let p = "almost";
        cardArr[index].front = "almost";
        setCardArr([...cardArr]);
        updateEmojis("help-circle");
        updateNumQuestions(p);
    }

    function Backface({ question, index }) {
        return (
            <div className="flashcardBack">
                <span>{question}</span>
                <img
                    onClick={() => ShowAnswer(index)}
                    src={flip}
                    alt="flip card"
                />
            </div>
        );
    }

    function ShowCorrect({ index }) {
        return (
            <div className="flashcardFront correct">
                <span>Pergunta {index + 1}</span>
                <span className="checkmark-circle">
                    <ion-icon name="checkmark-circle"></ion-icon>
                </span>
            </div>
        );
    }
    function ShowWrong({ index }) {
        return (
            <div className="flashcardFront wrong">
                <span>Pergunta {index + 1}</span>
                <span className="close-circle">
                    <ion-icon name="close-circle"></ion-icon>
                </span>
            </div>
        );
    }
    function ShowAlmost({ index }) {
        return (
            <div className="flashcardFront almost">
                <span>Pergunta {index + 1}</span>
                <span className="help-circle">
                    <ion-icon name="help-circle"></ion-icon>
                </span>
            </div>
        );
    }

    const [cardArr, setCardArr] = React.useState([
        {
            front: "initial",
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
        },
        {
            front: "initial",
            question: "O React é __",
            answer: " uma biblioteca JavaScript para construção de interfaces",
        },
        {
            front: "initial",
            question: "Componentes devem iniciar com _",
            answer: " letra maiúscula",
        },
        {
            front: "initial",
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
        },
        {
            front: "initial",
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            front: "initial",
            question: "Usamos o npm para __",
            answer: " gerenciar os pacotes necessários e suas dependências",
        },
        {
            front: "initial",
            question: "Usamos props para __ ",
            answer: "passar diferentes informações para componentes ",
        },
        {
            front: "initial",
            question: "Usamos estado (state) para _",
            answer:
                "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        },
    ]);

    let [contador, setContador] = React.useState(0);
    if (contador === 0) {
        cardArr.sort(comparador);
        setContador((contador = contador + 1));
    }
    function comparador() {
        return Math.random() - 0.5;
    }

    return (
        <>
            <div className="flashcardsContainer">
                <header>
                    <img src={logo2} alt="Logo do ZapRecall" />
                    <h1>ZapRecall</h1>
                </header>

                {cardArr.map((arr, index) => (
                    <Test
                        front={arr.front}
                        key={index}
                        index={index}
                        question={arr.question}
                        turncard={turncard}
                        Backface={Backface}
                        Answers={Answers}
                        answer={arr.answer}
                        correct={correct}
                        ShowCorrect={ShowCorrect}
                        setwrong={setwrong}
                        ShowWrong={ShowWrong}
                        setalmost={setalmost}
                        ShowAlmost={ShowAlmost}
                    />
                ))}
            </div>
            <Footer
                arrEmojis={arrEmojis}
                numQuestions={numQuestions}
                notZap={notZap}
            />

        </>
    );
}