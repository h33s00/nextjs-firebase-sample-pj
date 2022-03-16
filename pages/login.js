import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../context/AuthUserContext';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log("Success. The user is created in firebase")
      router.push('/logged_in');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  return (
    <>
    <div className={styles.main}>
      <form onSubmit={onSubmit}>
      { error && <alert color="danger">{error}</alert>}
        <input type="email" 
        value={email} onChange={(event) => setEmail(event.target.value)}
        name="email" id="loginEmail" placeholder='이메일' />
        <br></br>
        <input type="password" 
        value={password} onChange={(event) => setPassword(event.target.value)}
        name="password" id="loginPassword" placeholder='비밀번호' />
        <br></br>
        <button type="submit">로그인</button>      
      </form>
    </div>
    </>
  )
}