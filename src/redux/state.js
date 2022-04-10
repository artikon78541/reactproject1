import { headerReducer } from "./header-reducer";
import { partTableReducer } from "./partTable-reducer";


let store = {

  _state: {
    headerPage:{
      newSearchText:''
    },
    partTablePage:{
      parts: [
          {id:1, partNum:'4324102227', partName: 'фильтр', qty: 12, deliveryDate: '27.06.22', price: 1800},
          {id:2, partNum:'07654', partName: 'гайка', qty: 24, deliveryDate: '26.05.22', price: 48},
          {id:3, partNum:'TBX3498', partName: 'барабан тормозной', qty: 6, deliveryDate: '14.06.22', price: 7950},
          {id:4, partNum:'978670', partName: 'амортизатор', qty: 2, deliveryDate: '09.06.22', price: 4560},
          {id:5, partNum:'07654', partName: 'гайка', qty: 8, deliveryDate: '09.06.22', price: 52}
        ],
      searchedParts:[]
      
    }
  },

  _callSubscriber () {
    console.log('state changed')
  },

  getState(){
      return this._state;
  },

  subscribe(observer){
    this._callSubscriber = observer;
  },



  dispatch(action){

    this._state.headerPage = headerReducer(this._state.headerPage, action);
    this._state = partTableReducer(this._state, action);
    this._callSubscriber(this._state);
    
    // if(action.type===SEARCH_PART){
    //   let parts = this._state.partTablePage.parts.filter(el => el.partNum === this._state.headerPage.newSearchText)
    //   // state.partTablePage.searchedParts = state.partTablePage.searchedParts.push.apply(state.partTablePage.searchedParts, parts);
    //   this._state.partTablePage.searchedParts = [...parts]
    //   this._callSubscriber(this._state)
    // }
    // else if(action.type === UPDATE_NEW_SEARCH_TEXT){
    //   this._state.headerPage.newSearchText = action.newText;
    //   this._callSubscriber(this._state);
    // }

  }
  



}

// export const searchPartActionCreator = () => {
//   return{
//       type:SEARCH_PART
//   }
// }

// export const updateNewSearchTextActionCreator = (text) => {
//   return{
//       type:UPDATE_NEW_SEARCH_TEXT, newText: text
//   }
// }

// let rerenderEntireTree = () => {
//   console.log('state changed')
// }

  
// let state = {
//       headerPage:{
//         newSearchText:''
//       },
//       partTablePage:{
//         parts: [
//             {id:1, partNum:'4324102227', partName: 'фильтр', qty: 12, deliveryDate: '27.06.22', price: 1800},
//             {id:2, partNum:'07654', partName: 'гайка', qty: 24, deliveryDate: '26.05.22', price: 48},
//             {id:3, partNum:'TBX3498', partName: 'барабан тормозной', qty: 6, deliveryDate: '14.06.22', price: 7950},
//             {id:4, partNum:'978670', partName: 'амортизатор', qty: 2, deliveryDate: '09.06.22', price: 4560},
//             {id:5, partNum:'07654', partName: 'гайка', qty: 8, deliveryDate: '09.06.22', price: 52}
//           ],
//         searchedParts:[]
        
//       }


//   }

window.store = store;

  // export let searchPart = () => {
  //   let parts = state.partTablePage.parts.filter(el => el.partNum === state.headerPage.newSearchText)
  //   // state.partTablePage.searchedParts = state.partTablePage.searchedParts.push.apply(state.partTablePage.searchedParts, parts);
  //   state.partTablePage.searchedParts = [...parts]
  //   rerenderEntireTree(state)
  // }

  // export let updateNewSearchText = (newText) => {
  //   state.headerPage.newSearchText = newText;
  //   rerenderEntireTree(state);
  // }

  // export const subscribe = (observer) => {
  //   rerenderEntireTree = observer;
  // }





  export default store;