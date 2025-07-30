import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskFile, setTaskFile] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState('');

  const handleRunAgent = () => {
    setIsRunning(true);
    setResult('');

    // Simulate execution time
    setTimeout(() => {
      setIsRunning(false);
      setResult(
        `✅ Agent Completed Successfully!\n
        • Duplicates removed from spreadsheet.\n
        • Blank cells filled with N/A.\n
        • Total Sales: ₹4,25,000\n
        • Average per region: ₹1,06,250\n
        • Top 3 Products: Laptop, Monitor, Desk\n
        • PowerPoint slide created and saved to Desktop.`
      );
    }, 3000);
  };

  return (
    <div className="App">
      <h1>ExecuBot UI</h1>
      <p>Give your task file (like `spreadsheet_task.txt`) or describe the task:</p>
      <textarea
        rows={5}
        cols={50}
        placeholder="Enter task file or description..."
        value={taskFile}
        onChange={(e) => setTaskFile(e.target.value)}
      />

      <br /><br />

      <button onClick={handleRunAgent} disabled={isRunning}>
        {isRunning ? 'Running...' : 'Run Agent'}
      </button>

      <div style={{ marginTop: '30px' }}>
        {isRunning && <div className="loader"></div>}
        {result && (
          <pre className="result">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}

export default App;
