import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter} from 'react-router-dom';


const App = (props) => {



  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header newSearchText={props.state.headerPage.newSearchText} dispatch={props.dispatch} />
        <Content parts={props.state.partTablePage.searchedParts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
