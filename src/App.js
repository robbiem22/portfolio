import React from 'react';

// Images
import scores from './top 5.PNG'

function App() {
  return (
    <div style={{
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.5',
      margin: '0 auto',
      maxWidth: '900px',
      padding: '20px',
      color: '#333'
    }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Data Science Portfolio - Robbie McNair
      </h1>
      <p>Welcome to my professional portfolio! This is designed to showcase all of my individual work I have done after graduation. This portfolio is a react app made all by me from
        scratch; leveraging Git, GitHub, Firebase, Node.js, Visual Studio Code, Google Colab, and Python.</p>

      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>My Links</h3>
        <a href="https://github.com/robbiem22/portfolio">View Portfolio on GitHub</a>
        <p></p>
        <a href="https://www.kaggle.com/rob22bie">Kaggle Profile</a>
        <p></p>
        <a href="https://www.linkedin.com/in/robertm22/">LinkedIn</a>
        <p></p>
        <a href="https://jmu.joinhandshake.com/profiles/robbiem">Handshake</a>
      </div>



      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2>Kaggle</h2>
        <p><strong>Tools:</strong> Python, Machine Learning, Data Analysis</p>
        <p>Machine Learning projects and competitions.</p>
        <h3>Titanic - Machine Learning from Disaster</h3>
        <p>In this challenge, I built predictive models that answer the question: “what sorts of people
          were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).</p>
        <p>Top 5 Scores(accuracy): </p>
        <img src={scores} alt="top 5 scores"
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </div>


      <div style={{ background: '#f9f9f9', border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h2>⚽ Sports Analytics: World Cup Analysis (WIP) </h2>
        <p><strong>Tools:</strong> Colab(Python/VS Code), Tableau</p>
        <p>An exploratory data analysis of event-level data from recent fixtures.</p>
      </div>

    </div>
  );
}

export default App;