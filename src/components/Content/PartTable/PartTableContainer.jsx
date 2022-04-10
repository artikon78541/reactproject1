import React from "react";
import PartTable from "./PartTable";
import { searchPartActionCreator } from './../../../redux/partTable-reducer';
import { updateNewSearchTextActionCreator } from './../../../redux/partTable-reducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {

    return {
        parts: state.partTablePage.parts,

    }
}

let mapDispatchToProps = (dispatch) => {

    return {


    }
}

const PartTableContainer = connect(mapStateToProps, mapDispatchToProps)(PartTable)



export default PartTableContainer;