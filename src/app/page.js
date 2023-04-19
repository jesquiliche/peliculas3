

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import CargarPeliculas from "../components/CargarPeliculas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
     {/* <img src='/img/backdrop.jpg' width="100%"/> */}
     <CargarPeliculas/>
    
    </main>
  );
}
