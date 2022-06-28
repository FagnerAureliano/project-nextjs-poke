import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/Pokemon.module.css";

export default function Pokemon({ pokemon }: any) {
  const router = useRouter()

  if(router.isFallback){
    return <div>Loading...</div>
  }

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_title}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número: </h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo: </h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: any, index: number) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]} `}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h3>Altura: </h3>
          <p> {pokemon.height * 10} cm</p>
        </div>
        <div  className={styles.data_weight}>
          <h3>Peso: </h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx: any) { 
  const { id } = ctx.query;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  return {
    props: { pokemon, fallback: true },
  };
}
