import React from "react";
import s from './PartTable.module.css'

const PartTable = () => {
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
            <li className={s.table_row}>
              <div className={`${s.col} ${s.col_1}`} data-label="PartNumber">4324102227</div>
              <div className={`${s.col} ${s.col_2}`} data-label="PartName">Фильтр осушителя</div>
              <div className={`${s.col} ${s.col_3}`} data-label="Amount">12</div>
              <div className={`${s.col} ${s.col_4}`} data-label="Date">25.06.2022</div>
              <div className={`${s.col} ${s.col_5}`} data-label="Price">1730</div>
              <div className={`${s.col} ${s.col_6}`} data-label="Order">Order</div>
            </li>
        </ul>
      </div>
}

export default PartTable;