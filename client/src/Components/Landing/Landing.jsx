import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login');
    };

    return (
        <div className="landing">
            <header className="landing-header">
                <h1 className="landing-title">Welcome to <span>Classroom Meets</span></h1>
                <p className="landing-subtitle">Your virtual classroom for smarter learning and collaboration</p>
                <button className="start-btn" onClick={handleStart}>Join Now</button>
            </header>

            <section className="landing-info">
                <h2>🚀 Why Choose Classroom Meets?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span role="img" aria-label="teacher">🧑‍🏫</span>
                        <h3>Interactive Online Classes</h3>
                        <p>Engage with instructors and peers through live sessions.</p>
                    </div>
                    <div className="feature-card">
                        <span role="img" aria-label="chat">💬</span>
                        <h3>Real-Time Collaboration</h3>
                        <p>Work together on projects and assignments effortlessly.</p>
                    </div>
                    <div className="feature-card">
                        <span role="img" aria-label="books">📚</span>
                        <h3>Resource Sharing</h3>
                        <p>Access and share study materials anytime, anywhere.</p>
                    </div>
                    <div className="feature-card">
                        <span role="img" aria-label="lock">🔒</span>
                        <h3>Secure & Reliable</h3>
                        <p>Your data and sessions are protected with enterprise-grade security.</p>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Landing;
