import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
  
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bienvenue chez Société de Ménage</h1>
        <p>Nous fournissons des services de ménage professionnels.</p>
        <p>pour bien organisé vos evenements </p>
        <img src="/images/clean.jpg" alt="Hommes et femmes de ménage" />
       
      
      </header>
      <Footer />
    </div>
   
  );
}

export default App;
