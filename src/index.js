import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';




// let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//       <React.StrictMode>
//         <App state={state} dispatch={store.dispatch.bind(store)} />
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
  
//   }

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   rerenderEntireTree(store.getState())

//   }
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        {/* <App state = {store} dispatch={store.dispatch.bind(store)} /> */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

