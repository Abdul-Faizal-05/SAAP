import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/register'); 
    };

    return (
        <div className="landing">
            <header className="landing-header">
                <h1>Classroom Meets</h1>
                <p>Connect, Learn, and Collaborate in Real-Time</p>
                <button className="start-btn" onClick={handleStart}>Get Started</button>
            </header>
            <section className="landing-info">
                <h2>Why Classroom Meets?</h2>
                <ul>
                    <li>🧑‍🏫 Seamless online classes</li>
                    <li>💬 Real-time collaboration</li>
                    <li>📚 Resource sharing</li>
                    <li>🔒 Secure & reliable</li>
                </ul>
            </section>
            <footer className="landing-footer">
                <p>&copy; 2025 Classroom Meets. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Landing;
