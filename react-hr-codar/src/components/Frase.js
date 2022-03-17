import styles from "./Frase.module.css"; //CSS modules sao passadas como props

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Meu primeiro componente</p>
    </div>
  );
}

export default Frase;

// //sao partes de codigos que podem ser reutilizados em qlq lugar, inclusive
//       em outros componentes
