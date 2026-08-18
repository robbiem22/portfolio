// src/TitanicDetails.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
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
    { id: 's3', title: 'Stage 3: Random Forest' },
    { id: 's2', title: 'Stage 2: Decision Tree' },
    { id: 's1', title: 'Stage 1: Tutorial(Baseline)' },
];

function TitanicDetails() {
    const colors = {
        background: '#f8fafc',
        cardBg: '#ffffff',
        textMain: '#0f172a',
        textMuted: '#475569',
        accent: '#2563eb',
        border: '#e2e8f0',
    };

    return (
        <>
            <style>{`
        body {
          background-color: ${colors.background};
          margin: 0;
      `}</style>
            <div className={styles.page}>
                <Sidebar items={GUIDE_ITEMS} />
                <main className={styles.content}>

                    <section id="main" className={styles.section} style={{ marginTop: '-40px' }}>
                        <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                            
                            {/* --- NEW FLEX CONTAINER ALIGNING LINKS --- */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Link to="/" style={{ color: colors.accent, textDecoration: 'none', fontWeight: 'bold' }}>
                                    ← Back to Home
                                </Link>

                                {/* ---> TITANIC CODE LINK MOVED HERE <--- */}
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
                                Note: the more recent changes are further up the page.
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

                    <section id="s3" className={styles.section}>
                        {/* Stage 3 */}
                        <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                            <h2 style={{ color: colors.textMain, marginTop: 0 }}>Stage 3: Random Forest Classifier</h2>
                            <h3 style={{ color: colors.textMain, marginTop: '25px', }}>Attempt 4: Greatly Improved Feature Engineering: Score - 0.78229 (First one better than baseline)</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 4.</p> */}
                            <img src={rf41} alt="random forest 4.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf42} alt="random forest 4.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf43} alt="random forest 4.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf44} alt="random forest 4.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf45} alt="random forest 4.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf46} alt="random forest 4.6" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 3: Minimal Feature Engineering: Score - 0.74162</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 3.</p> */}
                            <img src={rf31} alt="random forest 3.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf32} alt="random forest 3.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf33} alt="random forest 3.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf34} alt="random forest 3.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 2: One Hot Encoding: Score - 0.73205</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 2.</p> */}
                            <img src={rf21} alt="random forest 2.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf22} alt="random forest 2.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf23} alt="random forest 2.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf24} alt="random forest 2.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf25} alt="random forest 2.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 1: Basic RF: Score - 0.63397</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 1.</p> */}
                            <img src={rf11} alt="random forest 1.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf12} alt="random forest 1.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf13} alt="random forest 1.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={rf14} alt="random forest 1.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                        </div>
                    </section>

                    <section id="s2" className={styles.section}>
                        {/* Stage 2 */}
                        <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                            <h2 style={{ color: colors.textMain, marginTop: 0 }}>Stage 2: Decision Tree Classifier</h2>
                            <h3 style={{ color: colors.textMain, marginTop: '25px', }}>Attempt 3: Using Accuracy Score to Find Best Model in Terms of Leaf Nodes: Score - 0.65311</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 3.</p> */}
                            <img src={dt31} alt="decision tree 3.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt32} alt="decision tree 3.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt33} alt="decision tree 3.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt34} alt="decision tree 3.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt35} alt="decision tree 3.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 2: Incorporating Train Test Split: Score - 0.60287</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 2.</p> */}
                            <img src={dt21} alt="decision tree 2.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt22} alt="decision tree 2.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt23} alt="decision tree 2.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt24} alt="decision tree 2.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt25} alt="decision tree 2.5" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <h3 style={{ color: colors.textMain, marginTop: '40px', }}>Attempt 1: Basic DT: Score - 0.52392</h3>
                            {/* <p style={{ color: colors.textMuted }}>Description of Attempt 1.</p> */}
                            <img src={dt11} alt="decision tree 1.1" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt12} alt="decision tree 1.2" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt13} alt="decision tree 1.3" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
                            <img src={dt14} alt="decision tree 1.4" style={{ width: '50%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}` }} />
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
                </main>
            </div>
        </>
    );
}

export default TitanicDetails;