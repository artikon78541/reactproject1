
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Content from './components/Content/Content';
import Header from './components/Header/Header';



const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Content />
      </div>
  );
}

export default App;
