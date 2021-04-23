import './app.css';
import React, { useEffect, useState } from "react";

const questions = [{
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
  "category": "Technology",
  "field": "Mobile phones",
  "points": 15,
  "question": "What year was the very first model of the iPhone released?",
  "info": "The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007.",
  "link": "https://en.wikipedia.org/wiki/IPhone",
  "answers": [
    {
      "id": 1,
      "answer": "2004",
      "isCorrect": true
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
}
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const correctAnswers = [];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + questions[currentQuestion].points);
      correctAnswers[currentQuestion] = true;
    } else {
      correctAnswers[currentQuestion] = false;
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
      // window.onload = function() {
      //   var resultTable = "<table><tr>";
      //   for (let i = 0; i < questions.length; i++) {
      //     resultTable += "<td>" + questions[i].question + "</td>";
      //   }
      //   resultTable += "</tr></table>";
      //   document.getElementById("resultTable").innerHTML = resultTable;
      // }
      
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz app</h1>
      </header>

      {showScore ? (
        <div className="score-section">
          <p> You scored {score} points. </p>
          <div id="resultTable"> </div>

        </div>
      ) : (

        <table>
          <tr>
            <td >
              <h2 className="category">{questions[currentQuestion].category}</h2>
              <p>Points: {questions[currentQuestion].points}</p>
              {/* <p>Question {question{currentQuestion}}</p> */}
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
