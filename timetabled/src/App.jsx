//import style sheet and any components you created to be able to use them
import './App.css';
import Calendar from './components/Calendar'
import Event from './components/Event'

//This is what is render on the website
//Everything is within the app function
const App = () => {
  //all functions need to have HTML in a return() statement to be render
  return (
    //className instead of class
    <div className="App">
      <h1>🫘Brownsville Local Coffee Crawl🫘</h1>
      <h3>Welcome to Brownsville, Keyra! Check out this calendar, get to know local coffee shops and what you can do in them.</h3>
      
      <div className="row">
        <div className='box blue'></div>
        <span>Date Ideas</span>
        
        <div className='box green'></div>
        <span>Solo Adventure</span>
      
        <div className='box pink'></div>
        <span>Workshops</span>
      </div>

      <Calendar />
    </div>
  )
  //Calendar is a component, has its own file
}

//Make App exportable to other files
export default App