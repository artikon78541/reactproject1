import React from "react";
import { searchPartActionCreator } from './../../redux/partTable-reducer';
import { updateNewSearchTextActionCreator } from './../../redux/header-reducer';
//import { updateNewSearchTextActionCreator, searchPartActionCreator  } from './../../redux/searchPart-reducer';
import Header from './Header'
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        
        newSearchText: state.headerPage.newSearchText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {   

        updateNewSearchText: (text) => {
        dispatch(updateNewSearchTextActionCreator(text))
    },

    searchPart: (text) =>{
        dispatch(searchPartActionCreator(text))
    }
        
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)


export default HeaderContainer;