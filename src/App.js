import { useSelector } from 'react-redux';
import './App.scss';
import QuizBoard from './Components/QuizBoard';
import Sidebar from './Components/Sidebar';
import SubmittedScreen from './Components/SubmittedScreen';
import { isSubmitted } from './Slices/quizSlice';

function App() {
  const submitted = useSelector(isSubmitted)
  return (
    <div className="App">
      {!submitted ? <>
        <div className='sidebar'><Sidebar /></div>
        <div className='content'><QuizBoard /></div>
      </>:<SubmittedScreen />}

    </div>
  );
}

export default App;
