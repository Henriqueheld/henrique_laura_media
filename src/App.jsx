
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import perfil from '/perfil.png'
function App() {

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [n3, setN3] = useState()
  const [n4, setN4] = useState()
  const [n5, setN5] = useState()
  const [n6, setN6] = useState()

  const [resp, setResp] = useState()

  const [error, setError] = useState()

  useEffect(() => {

    if (n1 !== undefined && n2 !== undefined && n3 !== undefined && n4 !== undefined && n5 !== undefined && n6 !== undefined && !isNaN(n1) && !isNaN(n2) && (n3) && !isNaN(n4) && !isNaN(n5) && !isNaN(n6)) {
      setResp((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) + parseFloat(n6)) / 6)


      setError('')
    } else {
      setError("Digirte valores validos para calcular")
    }
  }, [n1, n2, n3, n4, n5, n6])

  return (
    <div className={styles.wrapAll}>

      <h1 className={styles.title}>Calculo de media</h1>
      <img className={styles.perfil} src={perfil} alt="perfil" />
      <h2>Perfil</h2>
      <div className={styles.biscoito}>
        <input className={styles.input} type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder='Insira a nota 01' />
        <input className={styles.input} type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder='Insira a nota 02' />
        <input className={styles.input} type="number" onChange={(e) => setN3(e.target.value)} value={n3} placeholder='Insira a nota 03' />
        <input className={styles.input} type="number" onChange={(e) => setN4(e.target.value)} value={n4} placeholder='Insira a nota 04' />
        <input className={styles.input} type="number" onChange={(e) => setN5(e.target.value)} value={n5} placeholder='Insira a nota 05' />
        <input className={styles.input} type="number" onChange={(e) => setN6(e.target.value)} value={n6} placeholder='Insira a nota 06' />
      </div>



      <div className={styles.resp}>
        <h2>Resultado</h2>
        <h3>{resp?.toFixed(2)}</h3>
      </div>


    </div>
  )
}

export default App