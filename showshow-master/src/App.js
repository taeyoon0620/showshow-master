import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import logoImage from './Images/LOGOIMAGE.PNG';
import Grid from './components/Grid';
import './App.css';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';
import CardComponent from './components/CardComponent';
import CountdownTimer from './components/CountdownTimer';
import SignUp from './components/SignUp';
import busking from './Images/busking.jpg'; // 이미지 import

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <Router>
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <Sidebar />
                <div className="main-content">
                    <button className="toggle-button" onClick={toggleDarkMode}>
                        {darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                    </button>

                    <img src={logoImage} alt="Logo" className="logo-image" />

                    <Grid />
                    <SearchBar />
                    <div className="container">
                        <p>장르별 공연 정보!</p>
                    </div>

                    <div className="card-container">
                        <CardComponent
                            title="클래식 만찬 신청 링크"
                            description=""
                            imgSrc={busking} // 이미지 경로
                        />
                        <CardComponent
                            title="버스킹 공연 신청 링크"
                            description=""
                            imgSrc="https://example.com/image2.png"
                        />
                        <CardComponent
                            title="임영웅 ImHero 콘서트 예매 링크"
                            description=""
                            imgSrc="https://example.com/image3.png"
                        />
                        <CardComponent
                            title="국악 마당 예매 링크"
                            description=""
                            imgSrc="https://example.com/image4.png"
                        />
                    </div>

                    <hr />

                    <div className="container">
                        <p>인기별 공연 정보 찾기!</p>
                    </div>

                    <div className="card-container">
                        <CardComponent
                            title="클래식 만찬 신청 링크"
                            description=""
                            imgSrc="https://example.com/image5.png"
                        />
                        <CardComponent
                            title="버스킹 공연 신청 링크"
                            description=""
                            imgSrc="https://example.com/image6.png"
                        />
                        <CardComponent
                            title="임영웅 ImHero 콘서트 예매 링크"
                            description=""
                            imgSrc="https://example.com/image7.png"
                        />
                        <CardComponent
                            title="국악 마당 예매 링크"
                            description=""
                            imgSrc="https://example.com/image8.png"
                        />
                    </div>

                    <div className="container">
                        <h1>Countdown Timer</h1>
                        <CountdownTimer targetDate="2025-01-01T00:00:00" />
                    </div>

                    <hr />

                    <Link to="/signup" className="signup-link">회원가입</Link> 

                    <Routes>
                        <Route path="/" element={<HomePage toggleDarkMode={toggleDarkMode} />} />
                        <Route path="/signup" element={<SignUp />} /> 
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
