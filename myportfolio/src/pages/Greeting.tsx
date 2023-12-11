import { Link } from 'react-router-dom';

function Greetings() {
  return (

    <div>
      <h1>About Page</h1>
      <p>Learn more about us!</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Greetings;
