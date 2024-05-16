// css
import './App.css'

//React
import { useCallback, useEffect, useState } from 'react'

// data 
import {wordsList} from "./data/words";

//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  {id: 1, name: "start"},
  {id: 2 , name: "game"},
  {id: 3, name: "end"},
];

const guessesQty = 5;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //resgatar uma palavra aleatória da  categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  },[words]);


  const startGame = useCallback(() => {
    clearLetterStates();

    const {word, category} = pickWordAndCategory();
    console.log(word, category);

    //transformar a palavra em array de letras 
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //fill states 
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters); 

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    /*se a letra já foi adivinhada (guessedLetters) ou é incorreta (wrongLeyyer)
    a função retorna imediatamente, -ISSO EVITA QUE O MESMO PALPITE SEJA PROCESSADO MAIS DE UMA VEZ-*/
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    //adicionando o elemento no array
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }


  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // check if guesses ended
  useEffect(() =>{
    if(guesses <= 0){
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses] )


  // check win condition
  useEffect(() => {
    /*set armazena apenas valores únicos, uniqueLetter vai armazenar todas as
    letras únicas necessárias para ganhar o jogo*/
    const uniqueLetters = [... new Set(letters)];

    // win condition
    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore +=100);

      // restart game
      startGame();
    }
  }, [guessedLetters, letters, startGame])


  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }

  return (
    <div className='App'>
     { gameStage === "start" && <StartScreen startGame={startGame}/>}
     { gameStage === "game" &&
     <Game 
     verifyLetter={verifyLetter} 
     pickedWord={pickedWord} 
     pickedCategory={pickedCategory} 
     letters={letters}  
     guessedLetters={guessedLetters}
     wrongLetters={wrongLetters}
     guesses={guesses}
     score={score}
     />}
     { gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App
