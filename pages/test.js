import { db } from '../lib/fbConfig'

export default async function test() {
    const ws = db.collection('user').doc('whitesheep');
    const wsdoc = await ws.get();
    console.log(wsdoc.data())
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          {/* <h1>{JSON.stringify(wsdoc.data())}</h1> */}
        </div>
      </div >
    )
}