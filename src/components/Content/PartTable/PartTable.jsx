import React from "react";
import Part from "./Part";
import s from './PartTable.module.css'

const PartTable = (props) => {


  let partsList = props.parts.map(part => <Part id={part.id} partNum={part.partNum} partName={part.partName} qty={part.qty} deliveryDate={part.deliveryDate} price={part.price} />)


    return <div className={s.parttable}>
        <ul className={s.main_table}>
            <li className={s.table_header}>
              <div className={`${s.col} ${s.col_1}`}>Номер</div>
              <div className={`${s.col} ${s.col_2}`}>Наименование</div>
              <div className={`${s.col} ${s.col_3}`}>Кол-во</div>
              <div className={`${s.col} ${s.col_4}`}>Дата</div>
              <div className={`${s.col} ${s.col_5}`}>Цена</div>
              <div className={`${s.col} ${s.col_6}`}>Заказ</div>
            </li>
            {partsList}
        </ul>
      </div>
}

// export let rerenderPartTable = (parts) => {
//   <PartTable parts={parts}/>

// }

export default PartTable;