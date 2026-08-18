// src/TitanicCode.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function TitanicCode() {
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
        }
        .iframe-container {
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid ${colors.border};
          background: ${colors.background};
          margin-top: 20px;
        }
        .notebook-iframe {
          width: 106%;
          height: 900px;
          margin-top: -130px;
          margin-bottom: -90px;
          border: none;
          display: block;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .notebook-iframe {
            height: 460px;
          }
        }
      `}</style>

            <div style={{ padding: '40px', maxWidth: '1050px', margin: '0 auto', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {/* Code Container */}
                <div style={{ background: colors.cardBg, padding: '30px', borderRadius: '12px', border: `1px solid ${colors.border}`, }}>
                    <Link to="/titanic-details" style={{ color: colors.accent, textDecoration: 'none', fontWeight: 'bold', marginBottom: '15px', display: 'inline-block' }}>
                        ← Back to Process
                    </Link>
                    <h2 style={{ color: colors.textMain, marginTop: 0, marginBottom: '-10px' }}>Full Notebook Code: </h2>
                    <p style={{ color: colors.textMuted }}>Scroll through the window below to see my full code and visualizations.</p>

                    <div className="iframe-container">
                        <iframe
                            className="notebook-iframe"
                            src="https://nbviewer.org/github/robbiem22/portfolio/blob/main/Kaggle/titanic.ipynb"
                            title="Titanic Jupyter Notebook"
                        />
                    </div>
                </div>

            </div>
        </>
    );
}

export default TitanicCode;