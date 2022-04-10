import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "./MainContent/MainContent.jsx";
import PartTableContainer from "./PartTable/PartTableContainer.jsx";


const Content = () => {

    return (
        
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path='/maincontent' element={<MainContent />} />
                        <Route path='/parttable' element={<PartTableContainer />} />
                    </Routes>
                </div>
            </div>

    )
}

export default Content;