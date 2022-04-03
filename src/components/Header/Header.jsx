import React from "react";
import { NavLink } from "react-router-dom";
import {searchPartActionCreator, updateNewSearchTextActionCreator} from './../../redux/state'



const Header = (props) => {

    let searchText = React.createRef();

    let search = () => {
        props.dispatch(searchPartActionCreator())
    }
    
    let onSearchTextChange = () => {
        let text = searchText.current.value;
        props.dispatch(updateNewSearchTextActionCreator(text))
    }
    

    return <header className="header">
    <div className="container">
        <div className="header-row">
            <div className="header-logo">LOGO</div>
            <nav className="header-nav">
                <ul>
                    <li><NavLink to="/parttable">ПОИСК</NavLink></li>
                    <li><NavLink to="">КАТАЛОГ</NavLink></li>
                    <li><NavLink to="">ГАРАНТИЯ</NavLink></li>
                    <li><NavLink to="">ДОСТАВКА</NavLink></li>
                    <li><NavLink to="/maincontent">КОНТАКТЫ</NavLink></li>
                </ul>
            </nav>
            <div className="header-login">LOGIN</div>
        </div>
        <div className="search-row">
            <form className="search-form" action="" method="get">
                <input ref={searchText} value={props.newSearchText} onChange={onSearchTextChange} name="s" placeholder="Введите номер детали..." type="text"></input>
                <button type="submit" onClick={search}></button>
            </form>
        </div>
    </div>
</header>
}

export default Header;