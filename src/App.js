import './App.css';
import ChangeColour from './components/ChangeColour/ChangeColour';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
        <Profile />
        <Login />
        <ChangeColour />
    </div>
  );
}

export default App;
