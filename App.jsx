import styles from './App.module.css'
import {useState} from "react";

function SquareButton({number}) {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        console.log("Clicked " + number)
        setIsClicked(!isClicked);
    }
    return (
        <button className={styles.ButtonContainer} onClick={handleClick}>{isClicked ? (number % 2 === 0 ? "X" : "O") : null}</button>
    )
}
function Row({item}){
    return (
        <div className="board-row">
            {
                [1,2,3].map((value) => <SquareButton number={(value + (item * 3))}/>)
            }
        </div>
    )
}

function Square(){
    return (
        <>
            {[0,1,2].map((item) => (
                <Row item={item}/>
            ))}
        </>
    )
}

function App() {
    return (
        <>
            <Square />
        </>
    )
}

export default App;
