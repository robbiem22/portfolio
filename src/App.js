import React from 'react';

// Images
import scores from './top 5.PNG'

function App() {
  // --- STYLES ---
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
          justify-content: center;
          align-items: flex-start;
          gap: 30px;
          padding: 40px 20px;
          min-height: 100vh;
        }
        .sidebar-column {
          flex: 1;
          max-width: 240px;
          position: sticky;
          top: 40px;
          z-index: 10;
        }
        .main-column {
          width: 100%;
          max-width: 1050px;
        }
        .spacer-column {
          flex: 1;
          max-width: 240px;
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
        .nav-link:hover {
          background-color: #eff6ff;
          color: ${colors.accent};
          transform: translateX(4px);
        }
        
        .iframe-container {
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid ${colors.border};
          background: ${colors.background};
        }
        .notebook-iframe {
          width: 106%;
          height: 700px;
          margin-top: -130px;
          margin-bottom: -90px;
          border: none;
          display: block;
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
            top: 10px; 
          }
          .sidebar-card {
            padding: 15px !important; 
            margin-bottom: 0 !important;
          }
          .sidebar-title {
            text-align: center; 
          }
          .links-container {
            flex-direction: row; 
            flex-wrap: wrap; 
            justify-content: center;
          }
          .nav-link:hover {
            transform: translateY(-2px); 
          }
          .spacer-column {
            display: none; 
          }
          .notebook-iframe {
            height: 460px;
          }
        }
      `}</style>

      <div className="layout-wrapper" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', lineHeight: '1.6', color: colors.textMuted }}>

        {/* --- 1. TOP/LEFT COLUMN: Sidebar(Sticky) --- */}
        <div className="sidebar-column">
          <div className="sidebar-card" style={{ ...cardStyle, padding: '24px' }}>
            <h3 className="sidebar-title" style={{ marginTop: 0, color: colors.textMain, fontSize: '1.1rem', marginBottom: '16px' }}>
              My Links
            </h3>
            <div className="links-container">
              <a href="https://github.com/robbiem22/portfolio" className="nav-link">View Portfolio on GitHub</a>
              <a href="https://www.kaggle.com/rob22bie" className="nav-link">Kaggle Profile</a>
              <a href="https://www.linkedin.com/in/robertm22/" className="nav-link">LinkedIn</a>
              <a href="https://jmu.joinhandshake.com/profiles/robbiem" className="nav-link">Handshake</a>
            </div>
          </div>
        </div>

        {/* --- 2. MIDDLE/BOTTOM COLUMN: Main Content --- */}
        <div className="main-column">
          
          {/* Header Section */}
          <div style={{ marginBottom: '40px', paddingLeft: '10px' }}>
            <h1 style={{ 
              color: colors.textMain, 
              fontSize: '2.5rem',
              fontWeight: '800',
              letterSpacing: '-0.5px',
              margin: '0 0 8px 0' 
            }}>
              Robbie McNair
            </h1>
            <h1 style={{ color: colors.accent, margin: '0 0 16px 0', fontSize: '2rem', fontWeight: '600' }}>
              Data Science Portfolio
            </h1>
            <p style={{ maxWidth: '1050px', fontSize: '1.05rem', margin: 0, paddingRight: '10px' }}>
              Welcome to my professional portfolio! This is designed to showcase all of my individual work 
              I have done after graduation. This portfolio is a react app made all by me from scratch; leveraging Git, GitHub, Firebase, Node.js, Visual Studio Code, Google Colab, and Python.
            </p>
          </div>

          {/* Kaggle Project Card */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <h2 style={{ color: colors.textMain, marginTop: 0, marginBottom: '8px', fontSize: '1.8rem' }}>
                Kaggle
              </h2>
              <span style={{ background: '#f1f5f9', color: colors.textMuted, padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                Python • Machine Learning • Data Analysis
              </span>
            </div>
            
            <p style={{ margin: '0 0 20px 0' }}>Machine Learning projects and competitions.</p>

            <h3 style={{ color: colors.textMain, fontSize: '1.2rem', margin: '20px 0 10px 0' }}>
              Titanic - Machine Learning from Disaster
            </h3>
            <p style={{ marginBottom: '24px' }}>
              In this challenge, I built predictive models that answer the question: “what sorts of people were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).
            </p>
            
            <p style={{ fontWeight: '600', color: colors.textMain, marginBottom: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Top 5 Scores(Accuracy):</p>
            <img 
              src={scores} 
              alt="top 5 scores"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', border: `1px solid ${colors.border}`}} 
            />
            
            <p style={{ fontWeight: '600', color: colors.textMain, marginBottom: '10px', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Code(scrollable):</p>
            
            <div className="iframe-container">
              <iframe 
                className="notebook-iframe"
                src="https://nbviewer.org/github/robbiem22/portfolio/blob/main/Kaggle/titanic.ipynb"
                title="Titanic Jupyter Notebook" 
              />
            </div>
            
          </div>

          {/* Sports Analytics Card */}
          <div style={cardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <h2 style={{ color: colors.textMain, marginTop: 0, marginBottom: '8px', fontSize: '1.8rem' }}>
                ⚽ Sports Analytics: World Cup Analysis (WIP)
              </h2>
              <span style={{ background: '#fef3c7', color: '#d97706', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>
                Python • Tableau
              </span>
            </div>
            
            <p style={{ margin: '16px 0 0 0' }}>An exploratory data analysis of event-level data from recent fixtures.</p>
          </div>

        </div>

        {/* --- 3. RIGHT COLUMN: Invisible Spacer --- */}
        <div className="spacer-column"></div>

      </div>
    </>
  );
}

export default App;