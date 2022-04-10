const SEARCH_PART = 'SEARCH-PART'


let initialState = {
    parts: [
        {id:1, partNum:'4324102227', partName: 'фильтр', qty: 12, deliveryDate: '27.06.22', price: 1800},
        {id:2, partNum:'07654', partName: 'гайка', qty: 24, deliveryDate: '26.05.22', price: 48},
        {id:3, partNum:'TBX3498', partName: 'барабан тормозной', qty: 6, deliveryDate: '14.06.22', price: 7950},
        {id:4, partNum:'978670', partName: 'амортизатор', qty: 2, deliveryDate: '09.06.22', price: 4560},
        {id:5, partNum:'07654', partName: 'гайка', qty: 8, deliveryDate: '09.06.22', price: 52}
      ],
    searchedParts:[]
}

// export const partTableReducer = (state=initialState, action) => {

//     if(action.type===SEARCH_PART){
//         let parts = state.partTablePage.parts.filter(el => el.partNum === action.searchText)
//         state.partTablePage.searchedParts = [...parts]
        
//       }

//       return state;
// }

export const partTableReducer = (state=initialState, action) => {
debugger
  switch(action.type){
    case SEARCH_PART:
      let parts = state.parts.filter(el => el.partNum === action.searchText);
      let stateCopy = {...state};
      stateCopy.parts = [...state.parts];
      stateCopy.parts = [...parts];
      return stateCopy;
    default:
      return state;
  }
}

export const searchPartActionCreator = (text) => {

    return{
        type:SEARCH_PART, searchText: text
    }
  }
  
