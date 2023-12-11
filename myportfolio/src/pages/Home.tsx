import logo from '../logo.svg';
import { Link } from 'react-router-dom';
  
const Home = () => {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Hi! Temporary head page before hiking list frontend is deployed
        </p>
        <Link to="/Greetings">Greetings</Link>
        </header>
    </div>
  );
};
  
export default Home;