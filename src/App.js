import React from 'react';

// Images
import scores from './top 5.PNG'

function App() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.5',
      color: '#333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '40px',
      padding: '20px',
      minHeight: '100vh'
    }}>

      {/* --- 1. LEFT COLUMN: Sidebar(Sticky) --- */}
      <div style={{
        flex: 1,
        maxWidth: '220px',
        position: 'sticky',
        top: '20px'
      }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
          <h3 style={{ marginTop: 0 }}>My Links</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="https://github.com/robbiem22/portfolio">View Portfolio on GitHub</a>
            <a href="https://www.kaggle.com/rob22bie">Kaggle Profile</a>
            <a href="https://www.linkedin.com/in/robertm22/">LinkedIn</a>
            <a href="https://jmu.joinhandshake.com/profiles/robbiem">Handshake</a>
          </div>
        </div>
      </div>

      {/* --- 2. MIDDLE COLUMN: Main Content --- */}
      <div style={{
        width: '100%',
        maxWidth: '1000px'
      }}>
        <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', marginTop: 0 }}>
          Data Science Portfolio - Robbie McNair
        </h1>
        <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>Welcome to my professional portfolio! This is designed to showcase all of my individual work
          I have done after graduation. This portfolio is a react app made all by me from scratch; leveraging Git, GitHub, Firebase, Node.js, Visual Studio Code, Google Colab, and Python.</p>

        <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
          <h2 style={{ marginTop: 0 }}>Kaggle</h2>
          <p><strong>Tools:</strong> Python, Machine Learning, Data Analysis</p>
          <p>Machine Learning projects and competitions.</p>
          <h3>Titanic - Machine Learning from Disaster</h3>
          <p>In this challenge, I built predictive models that answer the question: “what sorts of people
            were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).</p>
          <p><strong>Top 5 Scores(accuracy): </strong></p>
          <img src={scores} alt="top 5 scores"
            style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />

          <p><strong>Code:</strong> </p>

          {/* --- 3. nbviewer iframe --- */}
          <div style={{
            borderRadius: '8px',
            border: '1.5px solid #ddd',
            overflow: 'hidden',
            background: '#fff'
          }}>
            <iframe
              src="https://nbviewer.org/github/robbiem22/portfolio/blob/main/Kaggle/titanic.ipynb"
              title="Titanic Jupyter Notebook"
              style={{
                width: '103%',
                height: '660px',
                marginTop: '-115px',
                marginBottom: '-95px',
                border: 'none'
              }}
            />
          </div>

        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
          <h2 style={{ marginTop: 0 }}>⚽ Sports Analytics: World Cup Analysis (WIP) </h2>
          <p><strong>Tools:</strong> Colab(Python/VS Code), Tableau</p>
          <p>An exploratory data analysis of event-level data from recent fixtures.</p>
        </div>
      </div>

      {/* --- 3. RIGHT COLUMN: Invisible Spacer --- */}
      <div style={{
        flex: 1,
        maxWidth: '220px'
      }}></div>

    </div>
  );
}

export default App;