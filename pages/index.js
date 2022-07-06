import Head from "next/head";
//import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import Carosole from "../pages/Carosole";
import Price from "./Price";
import Contact from "./Contactagain";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
<Carosole/>
<Price/>
<Contact/>
    </div>
  );
}
