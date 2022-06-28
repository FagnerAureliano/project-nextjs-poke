import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { GetStaticProps } from "next";
import Card from "../components/Card";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const maxPokemons = 251;
  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  //add index pokemons
  data.results.forEach((item: any, index: any) => {
    item.id = index + 1;
  });
  return {
    props: {
      pokemons: data.results,
    },
  };
};

const Home: NextPage = ({ pokemons }: any) => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>

      <div className={styles.pokemon_container}>
        {pokemons.map((poke: any) => (
          <Card key={poke.id} pokemon={poke} />
        ))}
      </div>
    </>
  );
};

export default Home;
