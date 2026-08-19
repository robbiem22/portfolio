// src/TitanicDetails.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './TitanicDetails.module.css';

import tutorial from './img/tutorial code.PNG';

//Images
import f1 from './img/features 1.PNG';
import f2 from './img/features 2.PNG';

import dt11 from './img/dt 1.1.PNG';
import dt12 from './img/dt 1.2.PNG';
import dt13 from './img/dt 1.3.PNG';
import dt14 from './img/dt 1.4.PNG';
import dt21 from './img/dt 2.1.PNG';
import dt22 from './img/dt 2.2.PNG';
import dt23 from './img/dt 2.3.PNG';
import dt24 from './img/dt 2.4.PNG';
import dt25 from './img/dt 2.5.PNG';
import dt31 from './img/dt 3.1.PNG';
import dt32 from './img/dt 3.2.PNG';
import dt33 from './img/dt 3.3.PNG';
import dt34 from './img/dt 3.4.PNG';
import dt35 from './img/dt 3.5.PNG';

import rf11 from './img/rf 1.1.PNG';
import rf12 from './img/rf 1.2.PNG';
import rf13 from './img/rf 1.3.PNG';
import rf14 from './img/rf 1.4.PNG';
import rf21 from './img/rf 2.1.PNG';
import rf22 from './img/rf 2.2.PNG';
import rf23 from './img/rf 2.3.PNG';
import rf24 from './img/rf 2.4.PNG';
import rf25 from './img/rf 2.5.PNG';
import rf31 from './img/rf 3.1.PNG';
import rf32 from './img/rf 3.2.PNG';
import rf33 from './img/rf 3.3.PNG';
import rf34 from './img/rf 3.4.PNG';
import rf41 from './img/rf 4.1.PNG';
import rf42 from './img/rf 4.2.PNG';
import rf43 from './img/rf 4.3.PNG';
import rf44 from './img/rf 4.4.PNG';
import rf45 from './img/rf 4.5.PNG';
import rf46 from './img/rf 4.6.PNG';

const GUIDE_ITEMS = [
    { id: 'main', title: 'Introduction' },
    { id: 's1', title: 'Stage 1: Tutorial(Baseline)' },
    { id: 's2', title: 'Stage 2: Decision Tree' },
    { id: 's3', title: 'Stage 3: Random Forest' },
];

function TitanicDetails() {
    // --- NEW: State to track the currently active section
    const [activeSection, setActiveSection] = useState('main');

    const colors = {
        background: '#f8fafc',
        cardBg: '#ffffff',
        textMain: '#0f172a',
        textMuted: '#475569',
        accent: '#2563eb',
        border: '#e2e8f0',
    };

    const cardStyle = {
        background: colors.cardBg,
        borderRadius: '12px',
        padding: '30px',
        marginBottom: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        border: `1px solid ${colors.border}`,
    };

    // --- NEW: Intersection Observer to update active section on scroll
    useEffect(() => {
        const observerOptions = {
            // Adjust these values if the highlight triggers too early or late
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections defined in GUIDE_ITEMS
        GUIDE_ITEMS.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        // Cleanup observer on unmount
        return () => {
            GUIDE_ITEMS.forEach((item) => {
                const section = document.getElementById(item.id);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <style>{`
                body {
                    background-color: ${colors.background};
                    margin: 0;
                }
                
                /* --- DESKTOP LAYOUT (Default) --- */
                .layout-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: left;
                    align-items: flex-start;
                    gap: 30px;
                    padding: 40px 80px;
                    min-height: 100vh;
                }
                .sidebar-column {
                    flex: 1;
                    max-width: 280px;
                    position: sticky;
                    top: 40px;
                    z-index: 10;
                    margin-top: 10px;
                }
                .main-column {
                    width: 100%;
                    max-width: 1050px;
                    padding-left: 60px;
                }
                .links-container {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .nav-link {
                    color: ${colors.textMuted};
                    text-decoration: none;
                    padding: 10px 14px;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    font-weight: 500;
                    font-size: 0.95rem;
                }
                
                /* --- NEW: Active State Class --- */
                .nav-link:hover, .nav-link.active {
                    background-color: #eff6ff;
                    color: ${colors.accent};
                    transform: translateX(4px);
                }

                /* --- MOBILE LAYOUT (Screens smaller than 768px) --- */
                @media (max-width: 768px) {
                    .layout-wrapper {
                        flex-direction: column; 
                        padding: 20px 15px;
                        gap: 20px;
                    }
                    .sidebar-column {
                        max-width: 100%; 
                        width: 100%;
                        position: static; 
                    }
                    .sidebar-card {
                        padding: 16px !important; 
                        margin-bottom: 0 !important;
                    }
                    .sidebar-title {
                        text-align: center; 
                        margin-bottom: 10px !important;
                    }
                    .links-container {
                        flex-direction: row; 
                        flex-wrap: wrap; 
                        justify-content: center;
                        gap: 2px;
                    }
                    .nav-link {
                        padding: 6px 12px;
                    }
                    .nav-link:hover, .nav-link.active {
                        transform: translateY(-2px); 
                    }
                    .main-column {
                        padding-left: 0;
                    }
                }
            `}</style>

            <div className="layout-wrapper" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', lineHeight: '1.6' }}>

                {/* TOP/LEFT COLUMN: Sidebar */}
                <div className="sidebar-column">
                    <div className="sidebar-card" style={{ ...cardStyle, padding: '24px' }}>
                        <h3 className="sidebar-title" style={{ marginTop: 0, color: colors.textMain, fontSize: '1.1rem', marginBottom: '16px', marginLeft: 10 }}>
                            Guide
                        </h3>
                        <div className="links-container">
                            {/* --- NEW: Conditionally apply active class based on state --- */}
                            {GUIDE_ITEMS.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MIDDLE/BOTTOM COLUMN: Main Content */}
                <div className="main-column">
                    <main className={styles.content}>

                        <section id="main" className={styles.section} style={{ marginTop: '-40px' }}>
                            <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Link to="/" style={{ color: colors.accent, textDecoration: 'none', fontWeight: 'bold' }}>
                                        ← Back to Home
                                    </Link>

                                    <Link
                                        to="/titanic-code"
                                        style={{
                                            backgroundColor: colors.accent,
                                            color: 'white',
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                        }}
                                    >
                                        View Full Code →
                                    </Link>
                                </div>

                                {/* Header */}
                                <h1 style={{ color: colors.textMain, marginTop: '20px', fontSize: '2.5rem' }}>
                                    Titanic - Machine Learning from Disaster
                                </h1>
                                <p style={{ color: colors.textMuted, fontSize: '1.1rem', marginTop: '-15px' }}>
                                    Here is a deep dive into my process, including exploratory data analysis,
                                    feature engineering, and model selection.
                                </p>
                                <p style={{ color: colors.textMuted, fontSize: '1.1rem' }}>
                                    Note: the more recent changes are further down the page. Use the sidebar to navigate.
                                </p>

                                <p style={{ marginBottom: '-5px', marginTop: '30px' }}>
                                    <strong>Training Dataset: </strong> 891 passengers, includes target variable; survival. <strong>Testing Dataset: </strong> 418 passengers, excludes survival variable.
                                </p>
                                <p style={{ marginBottom: '20px' }}>
                                    <strong>12 Features Total: </strong> - these also include PassengerID and Name, which are not used in the models.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '10px', marginBottom: '24px' }}>
                                    <img src={f1} alt="features 1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                    <img src={f2} alt="features 2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                </div>
                            </div>
                        </section>

                        <section id="s1" className={styles.section}>
                            {/* Stage 1 */}
                            <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                                <h2 style={{ color: colors.textMain, marginTop: 0 }}>Stage 1: Tutorial - What is the Baseline Score for a Simple Model?</h2>
                                <h3 style={{ color: colors.textMain, marginTop: 0 }}>Score - 0.77511 </h3>
                                <p style={{ color: colors.textMuted }}>I copy and pasted the code from the tutorial. This was a very basic model, and will be used as the baseline for comparison.</p>
                                <img src={tutorial} alt="tutorial code" style={{ width: '65%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            </div>
                        </section>

                        <section id="s2" className={styles.section}>
                            {/* Stage 2 */}
                            <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>

                                <h2 style={{ color: colors.textMain, marginTop: 0 }}>Stage 2: Decision Tree Classifier</h2>

                                <h3 style={{ color: colors.textMain, marginTop: '25px', }}>Attempt 1: Basic DT: Score - 0.52392</h3>
                                <img src={dt11} alt="decision tree 1.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt12} alt="decision tree 1.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt13} alt="decision tree 1.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt14} alt="decision tree 1.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />

                                <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 2: Incorporating Train Test Split: Score - 0.60287</h3>
                                <img src={dt21} alt="decision tree 2.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt22} alt="decision tree 2.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt23} alt="decision tree 2.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt24} alt="decision tree 2.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt25} alt="decision tree 2.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />

                                <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 3: Using Accuracy Score to Find Best Model in Terms of Leaf Nodes: Score - 0.65311</h3>
                                <img src={dt31} alt="decision tree 3.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt32} alt="decision tree 3.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt33} alt="decision tree 3.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt34} alt="decision tree 3.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={dt35} alt="decision tree 3.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            </div>
                        </section>

                        <section id="s3" className={styles.section}>
                            {/* Stage 3 */}
                            <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                                <h2 style={{ color: colors.textMain, marginTop: 0 }}>Stage 3: Random Forest Classifier</h2>

                                <h3 style={{ color: colors.textMain, marginTop: '25px', }}>Attempt 1: Basic RF: Score - 0.63397</h3>
                                <img src={rf11} alt="random forest 1.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf12} alt="random forest 1.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf13} alt="random forest 1.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf14} alt="random forest 1.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />

                                <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 2: One Hot Encoding: Score - 0.73205</h3>
                                <img src={rf21} alt="random forest 2.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf22} alt="random forest 2.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf23} alt="random forest 2.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf24} alt="random forest 2.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf25} alt="random forest 2.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />

                                <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 3: Minimal Feature Engineering: Score - 0.74162</h3>
                                <img src={rf31} alt="random forest 3.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf32} alt="random forest 3.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf33} alt="random forest 3.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf34} alt="random forest 3.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />

                                <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 4: Greatly Improved Feature Engineering: Score - 0.78229 (First one better than baseline)</h3>
                                <img src={rf41} alt="random forest 4.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf42} alt="random forest 4.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf43} alt="random forest 4.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf44} alt="random forest 4.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf45} alt="random forest 4.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                                <img src={rf46} alt="random forest 4.6" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </>
    );
}

export default TitanicDetails;