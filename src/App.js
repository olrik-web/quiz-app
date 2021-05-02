import './App.css';
import './ApiHelper'
import React, { useEffect, useState } from 'react';
import { get} from './ApiHelper.js';

const questions = [
  {
    "id": 1,
    "category": "SCIENCE",
    "field": "Physics",
    "points": 12,
    "question": "Which physical property can be measured in the unit Coulomb?",
    "info": "The coulomb (symbol: C) is the International System of Units (SI) unit of electric charge.",
    "link": "https://en.wikipedia.org/wiki/Coulomb",
    "answers": [
      {
        "id": 1,
        "answer": "Pressure",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "Temperature",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "Volume",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "Charge",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 2,
    "category": "GEOGRAPHY",
    "field": "Europe",
    "points": 5,
    "question": "What is the capital of Italy?",
    "info": "A unitary parliamentary republic with Rome as its capital.",
    "link": "https://en.wikipedia.org/wiki/Italy",
    "answers": [
      {
        "id": 1,
        "answer": "Rome",
        "isCorrect": true
      },
      {
        "id": 2,
        "answer": "Paris",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "Berlin",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "Copenhagen",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 3,
    "category": "GEOGRAPHY",
    "field": "World",
    "points": 10,
    "question": "What is the largest city in the world?",
    "info": "The Greater Tokyo Area is the most populous metropolitan area in the world, with more than 37.393 million residents as of 2020.",
    "link": "https://en.wikipedia.org/wiki/Tokyo",
    "answers": [
      {
        "id": 1,
        "answer": "Beijing",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "Delhi",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "Tokyo",
        "isCorrect": true
      },
      {
        "id": 4,
        "answer": "Mexico City",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "category": "TECHNOLOGY",
    "field": "Mobile phones",
    "points": 15,
    "question": "What year was the very first model of the iPhone released?",
    "info": "The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007.",
    "link": "https://en.wikipedia.org/wiki/IPhone",
    "answers": [
      {
        "id": 1,
        "answer": "2004",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "2007",
        "isCorrect": true
      },
      {
        "id": 3,
        "answer": "2009",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "2011",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "category": "GEOGRAPHY",
    "field": "Europe",
    "points": 5,
    "question": "What is the capital of Denmark?",
    "info": "The government and national parliament are seated in Copenhagen, the nation's capital, largest city, and main commercial centre.",
    "link": "https://en.wikipedia.org/wiki/Denmark",
    "answers": [
      {
        "id": 1,
        "answer": "Rome",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "Copenhagen",
        "isCorrect": true
      },
      {
        "id": 3,
        "answer": "Berlin",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "Bangkok",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "category": "MONARCHY",
    "field": "Europe",
    "points": 15,
    "question": "What is the name of the Queen of Denmark?",
    "info": "Margrethe II (Margrethe Alexandrine Þórhildur Ingrid, born 16 April 1940) is Queen of Denmark and commander-in-chief of the Danish Defence.",
    "link": "https://en.wikipedia.org/wiki/Margrethe_II_of_Denmark",
    "answers": [
      {
        "id": 1,
        "answer": "Inge",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "Margrethe",
        "isCorrect": true
      },
      {
        "id": 3,
        "answer": "Lone",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "Mary",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "category": "GEOGRAPHY",
    "field": "World",
    "points": 13,
    "question": "How many time zones are in Russia?",
    "info": "There are eleven time zones in Russia, which currently observe times ranging from UTC+02:00 to UTC+12:00.",
    "link": "https://en.wikipedia.org/wiki/Time_in_Russia",
    "answers": [
      {
        "id": 1,
        "answer": "1",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "3",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "8",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "11",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 8,
    "category": "FLAGS",
    "field": "World",
    "points": 15,
    "question": "How many stripes are on the flag of the United States?",
    "info": "The flag of the United States consists of thirteen equal horizontal stripes of red (top and bottom) alternating with white, with a blue rectangle in the canton (referred to specifically as the 'union').",
    "link": "https://en.wikipedia.org/wiki/Flag_of_the_United_States",
    "answers": [
      {
        "id": 1,
        "answer": "3",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "5",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "9",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "13",
        "isCorrect": true
      }
    ]
  },
  {
    "id": 9,
    "category": "GEOGRAPHY",
    "field": "Africa",
    "points": 5,
    "question": "What is the capital of Burkina Faso?",
    "info": "The citizens of Burkina Faso are known as Burkinabé or Burkinabè, and its capital is Ouagadougou.\nBurkina Faso is a landlocked country in West Africa that covers an area of around 274,200 square kilometres.",
    "link": "https://en.wikipedia.org/wiki/Burkina_Faso",
    "answers": [
      {
        "id": 1,
        "answer": "Ouagadougou",
        "isCorrect": true
      },
      {
        "id": 2,
        "answer": "Capetown",
        "isCorrect": false
      },
      {
        "id": 3,
        "answer": "Kinshasa",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "Waka waka Eheh",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "category": "MOVIES AND ENTERTAINMENT",
    "field": "Hollywood Stars",
    "points": 5,
    "question": "What is the amount of movies in which Nicolas Cage is credited as of April 2021?",
    "info": "The American actor Nicolas Cage has made thus far 100 films though only 97 have been released.",
    "link": "https://en.wikipedia.org/wiki/Nicolas_Cage_filmography",
    "answers": [
      {
        "id": 1,
        "answer": "56",
        "isCorrect": false
      },
      {
        "id": 2,
        "answer": "97",
        "isCorrect": true
      },
      {
        "id": 3,
        "answer": "35",
        "isCorrect": false
      },
      {
        "id": 4,
        "answer": "48",
        "isCorrect": true
      }
    ]
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsState, setQuestionsState] = useState(null);

  let max_points = 0;

  useEffect(() => {
    const jsonData = get();
    jsonData.then(data => {
      setQuestionsState(data);
    })
  })
  questions.forEach((question) => {
    max_points += question.points;
  });

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + questions[currentQuestion].points);
    }
    const buttons = document.querySelectorAll("#answer");
    buttons.forEach((button) => {
      button.disabled = true;
    });
    const info = document.getElementById("info");
    info.innerText = questions[currentQuestion].info;
    const link = document.getElementById("link");
    link.href = questions[currentQuestion].link;
    link.innerText = questions[currentQuestion].link;

  }

  const handleNextQuestionButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      const buttons = document.querySelectorAll("#answer");
      buttons.forEach((button) => {
        button.disabled = false;
      });

      const info = document.getElementById("info");
      info.innerText = "";
      const link = document.getElementById("link");
      link.href = "";
      link.innerText = "";

    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz app</h1>
      </header>

      {showScore ? (
        <div className="score-section">
          <p> You scored {score} out of {max_points} points. </p>
          <div id="resultTable"> </div>

        </div>
      ) : (

        <table>
          <tr>
            <td >
              <h2 className="category">{questions[currentQuestion].category}</h2>
              <h3>{questions[currentQuestion].field}</h3>
              <p>Points: {questions[currentQuestion].points}</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="question">{questions[currentQuestion].question}</h3>
            </td>
          </tr>
          <tr>
            <div className='answer-section'>
              {questions[currentQuestion].answers.map((answerOption) => (
                <button id="answer" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answer}</button>
              ))}
            </div>

          </tr>
          <tr>
            <td>
              Information: <p id="info"></p>
              <p>Source: <a id="link" href="">Link</a></p>

            </td>
          </tr>
          <tr>
            <td>
              <button type="button" onClick={handleNextQuestionButtonClick}>Next question</button>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
}

export default App;
