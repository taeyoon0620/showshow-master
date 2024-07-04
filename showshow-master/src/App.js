import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import logoImage from './Images/LOGOIMAGE.PNG'; 
import './App.css'; // Correct import path for App.css
import Grid from './components/Grid'; 
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar'; 
import CardComponent from './components/CardComponent'; 

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
                    <div class="container">
                        <p>장르별 공연 정보!</p>
                    </div>
                
                    <div className="card-container">
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="클래식 만찬 신청 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="버스킹 공연 신청 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="임영웅 ImHero 콘서트 예매 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="국악 마당 예매 링크" 
                            description="" 
                        />
                    </div>

                    <hr></hr>
                    <div class="container">
                        <p>인기별 공연 정보 찾기!</p>
                    </div>


                    <div className="card-container">
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="클래식 만찬 신청 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="버스킹 공연 신청 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="임영웅 ImHero 콘서트 예매 링크" 
                            description="" 
                        />
                        <CardComponent 
                            imageUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                            title="국악 마당 예매 링크" 
                            description="" 
                        />
                    </div>

                

                    <hr></hr>
                    
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
