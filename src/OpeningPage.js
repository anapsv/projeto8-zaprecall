import logo from './midia/logo.png';

export default function OpeningPage({setStart}) {

    return (
        <div className="openingPage">
            <img src={logo} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
            <button className="startButton" onClick={() => setStart('flashcards')}>Iniciar Recall!</button>
        </div>
    );
}