import React from 'react';

function App() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.6',
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
      color: '#333'
    }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Data Science Portfolio - Robbie McNair
      </h1>
      <p>Welcome to my professional portfolio! This is designed to showcase all of my individual work I have done after graduation. This portfolio is a react app made all by me from
        scratch; leveraging Git, GitHub, Firebase, Node.js, Visual Studio Code, Google Colab, and Python.</p>

      <h2 style={{ color: '#2980b9', marginTop: '30px' }}>Featured Work</h2>

      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>⚽ Kaggle</h3>
        <p><strong>Tools:</strong> Python, Machine Learning, Data Analysis</p>
        <p>Machine Learning projects and competitions.</p>
        <a href="https://www.kaggle.com/rob22bie">Kaggle Profile</a>
      </div>


      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>⚽ Sports Analytics: World Cup Analysis (WIP) </h3>
        <p><strong>Tools:</strong> Colab(Python/VS Code), Tableau</p>
        <p>An exploratory data analysis of event-level data from recent fixtures.</p>
      </div>

      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>My Links</h3>
        <a href="https://github.com/robbiem22/portfolio">View Portfolio on GitHub</a>
        <a href="https://www.linkedin.com/in/robertm22/">LinkedIn</a>
        <p></p>
        <a href="https://jmu.joinhandshake.com/profiles/robbiem">Handshake</a>
      </div>
    </div>
  );
}

export default App;