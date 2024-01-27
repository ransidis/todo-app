import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
        <TodoWrapper style={{height:'100vh'}}/>
        
        <footer style={{paddingTop:'1rem', paddingBottom: '1rem', backgroundColor: 'rgb(32, 30, 30)', color: 'azure'}}>
        <center>Made with ❤️ by Ransi</center>
      </footer>
    </div>
  );
}

export default App;
