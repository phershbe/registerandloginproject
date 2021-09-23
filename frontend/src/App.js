import './App.css';
import Register from './components/register';
import Login from './components/login';
import Homepage from './components/homepage';
import Header from './components/header';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const theState = useSelector(state => state.page);
  return (
    <div className="App">
      <Header />
      <h1>Application Name</h1>
      {theState === 'homepage' ? <Homepage /> : theState === 'register' ? <Register /> : theState === 'login' ? <Login /> : <Homepage />}
    </div>
  );
}

export default App;
