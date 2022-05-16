export default function Answers({
    answer,
    correct,
    index,
    setwrong,
    setalmost,
}) {
    return (
        <div className="flashcardBack">
            <span>{answer}</span>
            <div className="answers">
                <div onClick={() => setwrong(index)}>Não lembrei</div>
                <div onClick={() => setalmost(index)}>Quase não lembrei</div>
                <div onClick={() => correct(index)}>Zap!</div>
            </div>
        </div>
    );
}