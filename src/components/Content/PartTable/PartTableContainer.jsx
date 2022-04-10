import React from "react";
import PartTable from "./PartTable";
import { searchPartActionCreator } from './../../../redux/partTable-reducer';
import { connect } from "react-redux";

// const PartTableContainer = (props) => {
//   //let partsList = props.parts.map(part => <Part id={part.id} partNum={part.partNum} partName={part.partName} qty={part.qty} deliveryDate={part.deliveryDate} price={part.price} />)

//     return <PartTable parts = {props.parts}/>
// }

let mapStateToProps = (state) => {

    return {
        parts: state.partTablePage.parts

    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        // searchPart: (text) =>{
        //     debugger
        //     dispatch(searchPartActionCreator(text))
        // }
    }
}

const PartTableContainer = connect(mapStateToProps, mapDispatchToProps)(PartTable)



export default PartTableContainer;