import './app.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz app</h1>
      </header>
      <table>
        <tr>
          <td colSpan="2" >
            <h2 className="category">Category</h2>
            <p>Points: 0</p>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <h3 className="question">Question</h3>
          </td>
        </tr>
        <tr>
          <td className="answer">
            <p>Answer 1</p>
          </td>
          <td className="answer">
            <p>Answer 2</p>
          </td>
        </tr>
        <tr>
          <td className="answer">
            <p>Answer 3</p>
          </td>
          <td className="answer">
            <p>Answer 4</p>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <p>Information <br />
            Source: <a href="">Link</a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button">Button</button>
          </td>
          <td>
            <button type="button">Button</button>
          </td>

        </tr>
      </table>

    </div>
  );
}

export default App;
