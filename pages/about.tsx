import Image from "next/image";
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre novo projeto:</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        molestias voluptates eos animi. Nihil quae corporis ipsam maiores
        laboriosam tenetur harum quo dolorum, praesentium cupiditate obcaecati
        quaerat, ipsa accusantium illum!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      /> 
    </div>
  );
}
