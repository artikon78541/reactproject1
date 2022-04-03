import React from "react";
import s from './PartTable.module.css'

const Part = (props) => {
    return <li className={s.table_row}>
              <div className={`${s.col} ${s.col_1}`} data-label="PartNumber">{props.partNum}</div>
              <div className={`${s.col} ${s.col_2}`} data-label="PartName">{props.partName}</div>
              <div className={`${s.col} ${s.col_3}`} data-label="Amount">{props.qty}</div>
              <div className={`${s.col} ${s.col_4}`} data-label="Date">{props.deliveryDate}</div>
              <div className={`${s.col} ${s.col_5}`} data-label="Price">{props.price}</div>
              <div className={`${s.col} ${s.col_6}`} data-label="Order">{props.order}</div>
            </li>
}

export default Part;