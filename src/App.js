
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Content from './components/Content/Content';




const App = () => {

  return (
      <div className="app-wrapper">
        {/* <HeaderContainer newSearchText={props.state.headerPage.newSearchText} dispatch={props.dispatch} store ={props.store}/> */}
        <HeaderContainer />
        {/* <Content parts={props.state.partTablePage.searchedParts} /> */}
        <Content />
      </div>
  );
}

export default App;
