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
              <Link to="/test/test3.js">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      </header>
  
    );
  }
  export default Header; 
