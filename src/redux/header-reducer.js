
const UPDATE_NEW_SEARCH_TEXT = 'UPDATE-NEW-SEARCH-TEXT'

let initialState = {
    newSearchText:''
}

export const headerReducer = (state=initialState, action) => {

      switch(action.type){
        case UPDATE_NEW_SEARCH_TEXT:
          let stateCopy = {...state};
          stateCopy.newSearchText = action.newText;
          return stateCopy;
        default:
          return state;
      }



}


export const updateNewSearchTextActionCreator = (text) => {
  return{
      type:UPDATE_NEW_SEARCH_TEXT, newText: text
  }
}