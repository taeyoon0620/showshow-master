import React from "react";
import './SearchBar.css'; 
import logoImage from '../Images/LOGOIMAGE.PNG'; 

const SearchBar = () => {
    return (
        <div className="header">
            <img src={logoImage} alt="Logo" className="logo-image" />
            <input type="text" className="iptSearch" placeholder="검색어를 입력하세요" />
            <button type="button" className="search">
                <span>검색</span>
            </button>
        </div>
    )
};

export default SearchBar;