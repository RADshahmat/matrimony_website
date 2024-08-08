import './App.css';
import Header from './components/header'; 
import HomePage from './pages/homepage'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
      <HomePage />
      </div> 
    </div>
  );
}

export default App;
