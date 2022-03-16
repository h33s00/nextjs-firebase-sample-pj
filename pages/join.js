import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SignUpForm from '../components/signUpForm'


export default function signUp() {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>With Campus</h1>
      </div>

        // 회원가입 !
      <div>
        <SignUpForm></SignUpForm>
      </div>
    </div >
  )
}