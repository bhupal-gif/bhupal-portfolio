import React from 'react';

const Home = () => {
  return (
    <div >
      {/* <div style={styles.card}>
        <h1 style={styles.title}>Welcome to the Home Page</h1>
        <p style={styles.message}>You have successfully logged in!</p>
      </div> */}
      Hello
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '2rem 3rem',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1rem',
    color: '#007bff',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
  }
};

export default Home;
