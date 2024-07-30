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
          </ul>
        </nav>
      </div>
      </header>
  
    );
  }
  export default Header; 