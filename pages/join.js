import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SignUpForm from '../components/SignUpForm'


export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>With Campus</h1>
      </div>
      <div className={styles.main}>
        <SignUpForm></SignUpForm>
      </div>
    </div >
  )
}