import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "./MainContent/MainContent.jsx";
import PartTable from "./PartTable/PartTable.jsx";


const Content = (props) => {



    return (
        
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/maincontent' element={<MainContent />} />
                        <Route path='/parttable' element={<PartTable parts={props.parts} />} />
                    </Routes>
                </div>
            </div>

    )
}

export default Content;