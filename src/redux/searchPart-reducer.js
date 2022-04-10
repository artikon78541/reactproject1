// const SEARCH_PART = 'SEARCH-PART'
// const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT'


// let initialState = {
//     parts: [
//         {id:1, partNum:'4324102227', partName: 'фильтр', qty: 12, deliveryDate: '27.06.22', price: 1800},
//         {id:2, partNum:'07654', partName: 'гайка', qty: 24, deliveryDate: '26.05.22', price: 48},
//         {id:3, partNum:'TBX3498', partName: 'барабан тормозной', qty: 6, deliveryDate: '14.06.22', price: 7950},
//         {id:4, partNum:'978670', partName: 'амортизатор', qty: 2, deliveryDate: '09.06.22', price: 4560},
//         {id:5, partNum:'07654', partName: 'гайка', qty: 8, deliveryDate: '09.06.22', price: 52}
//       ],
//     newSearchText:''
// }


// export const searchPartReducer = (state=initialState, action) => {
// debugger
//     let stateCopy = {...state};
//     switch(action.type){
//     case SEARCH_PART:
//       let parts = stateCopy.parts.filter(el => el.partNum === state.newSearchText);
//       stateCopy.parts = [...parts];
//       return stateCopy;
//     case UPDATE_NEW_SEARCH_TEXT:
//       stateCopy.newSearchText = action.newText;
//       return stateCopy;
//     default:
//       return state;
//   }
// }


// export const searchPartActionCreator = () => {
// debugger
//     return{
//         type:SEARCH_PART
//     }
//   }
  
//   export const updateNewSearchTextActionCreator = (text) => {
//     return{
//         type:UPDATE_NEW_SEARCH_TEXT, newText: text
//     }
//   }