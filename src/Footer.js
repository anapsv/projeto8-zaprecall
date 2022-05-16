import congratsEmoji from "./midia/party.png"
import sadEmoji from "./midia/sad.png"

function Footeremoji({ numQuestions, notZap }) {
    let Zap = 8 - notZap;
    if (numQuestions === 8 && Zap === 8) {
      return (
        <>
          <div className="footer-emoji">
            <img src={congratsEmoji} alt="Emoji de Parabéns" />
            <span>Parabéns!</span>
          </div>
          <div> "Você não esqueceu de nenhum flashcard!"</div>
        </>
      );
    } else if (numQuestions === 8 && Zap < 8) {
      return (
        <>
          <div className="footer-emoji">
            <img src={sadEmoji} alt="Emoji Triste" />
            <span>Putz...</span>
          </div>
          <div> Ainda faltam alguns... Mas não desanime!</div>
        </>
      );
    } else return "";
  }
  
  export default function Footer({ arrEmojis, numQuestions, notZap}) {
    return (
      <footer>
        <Footeremoji
          numQuestions={numQuestions}
          notZap={notZap}
        />
  
        <div>{numQuestions}/8 CONCLÚIDOS</div>
        <div className="check-icons">
          {arrEmojis.map((arr, index) => (
            <span key={index} className={arr}>
              <ion-icon name={arr}></ion-icon>
            </span>
          ))}
        </div>
        
      </footer>
    );
  }