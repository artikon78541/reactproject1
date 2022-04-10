import React from "react";
import { searchPartActionCreator } from './../../redux/partTable-reducer';
import { updateNewSearchTextActionCreator } from './../../redux/header-reducer';
import Header from './Header'
import { connect } from "react-redux";



// const HeaderContainer = (props) => {


//     let search = (text) => {
//         props.dispatch(searchPartActionCreator(text))
//     }
    
//     let onSearchTextChange = (text) => {

//         props.dispatch(updateNewSearchTextActionCreator(text))
//     }
    

//     return (<Header updateNewSearchText = {onSearchTextChange} searchPart = {search} newSearchText = {props.newSearchText}/>)
// }


let mapStateToProps = (state) => {

    return {
        newSearchText: state.headerPage.newSearchText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        updateNewSearchText: (text) =>{
            dispatch(updateNewSearchTextActionCreator(text))
        },
        searchPart: (text) =>{
 
            dispatch(searchPartActionCreator(text))
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)


export default HeaderContainer;