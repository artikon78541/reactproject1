import React from "react";

const Content = () => {
    return <div className="content">
    <div className="container">
        <ul className="main-table">
            <li className="table-header">
              <div className="col col-1">Номер</div>
              <div className="col col-2">Наименование</div>
              <div className="col col-3">Кол-во</div>
              <div className="col col-4">Дата</div>
              <div className="col col-5">Цена</div>
              <div className="col col-6">Заказ</div>
            </li>
            <li className="table-row">
              <div className="col col-1" data-label="PartNumber">4324102227</div>
              <div className="col col-2" data-label="PartName">Фильтр осушителя</div>
              <div className="col col-3" data-label="Amount">12</div>
              <div className="col col-4" data-label="Date">25.06.2022</div>
              <div className="col col-5" data-label="Price">1730</div>
              <div className="col col-6" data-label="Order">Order</div>
            </li>
        </ul>
    </div>
</div>
}

export default Content;