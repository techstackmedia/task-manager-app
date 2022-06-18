import Tasks from './pages/Tasks';
import taskFeedback from './mocks/taskFeedback';
import './App.css';
import { useState } from 'react';

function App() {
  const [task] = useState(taskFeedback);
  return (
    <>
      <div className="App">
        <Tasks task={task} total={task.length} />
      </div>
    </>
  );
}

export default App;
