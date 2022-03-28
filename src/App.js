import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Content />
    </div>
  );
}

export default App;
