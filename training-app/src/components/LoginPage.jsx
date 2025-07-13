import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const navigate =useNavigate();
// const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);

    const req={
        email:email,
        password:password
    }

    axios.post("http://localhost:8080/api/v1/logintest",req).then((res)=>{
        // navigate("/home");
    })
    .catch((err)=>{
        console.log("err",err);
    })

  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    height: '100vh', backgroundColor: '#f5f5f5'
  },
  form: {
    display: 'flex', flexDirection: 'column', padding: '2rem',
    backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  title: {
    marginBottom: '1rem', textAlign: 'center'
  },
  input: {
    marginBottom: '1rem', padding: '0.75rem', fontSize: '1rem'
  },
  button: {
    padding: '0.75rem', fontSize: '1rem', backgroundColor: '#007bff',
    color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
  }
};

export default LoginPage;
