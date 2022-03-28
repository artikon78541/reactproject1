import React from "react";

const Header = () => {
    return <header className="header">
    <div className="container">
        <div className="header-row">
            <div className="header-logo">LOGO</div>
            <nav className="header-nav">
                <ul>
                    <li><a href="">ПОИСК</a></li>
                    <li><a href="">КАТАЛОГ</a></li>
                    <li><a href="">ГАРАНТИЯ</a></li>
                    <li><a href="">ДОСТАВКА</a></li>
                    <li><a href="">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <div className="header-login">LOGIN</div>
        </div>
        <div className="search-row">
            <form className="search-form" action="" method="get">
                <input name="s" placeholder="Введите номер детали..." type="text"></input>
                <button type="submit"></button>
            </form>
        </div>
    </div>
</header>
}

export default Header;