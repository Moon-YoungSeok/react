import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 

function Header() {
    return (
      <header>
  
      <div className='titlebar'>
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/test/tictactoe.js">TicTacToe</Link>
            </li>
            <li>
              <Link to="/test/props.js">Props</Link>
            </li>
            <li>
              <Link to="/test/handler.js">Handler</Link>
            </li>
            <li>
              <Link to="/test/state.js">State</Link>
            </li>
            <li>
              <Link to="/test/ref.js">Ref</Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/test/sign.js">sign</Link>
=======
              <Link to="/test/sign.js">Sign</Link>
>>>>>>> 672212eea4c5fee42e88bcd7a388e1f95bcbfba1
            </li>
          </ul>
        </nav>
      </div>
      </header>
  
    );
  }
  export default Header; 
