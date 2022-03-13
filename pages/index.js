import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h1>With Campus</h1>
      </div>

      <form type="submit" className={styles.loginForm}>
        <input placeholder=' 아이디' />
        <input placeholder=' 비밀번호' />
        <button className={styles.loginBtn}>로그인</button>
      </form>

      <p className={styles.joinQ}>위드캠퍼스가 처음이신가요?
    
        <Link href={"/"}>
          <a className={styles.join}>회원가입</a>
        </Link>
        
      </p>

    </div >
  )
}