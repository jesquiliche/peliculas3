

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Cartelera from "@/components/Cartelera";
import Proximamente from "@/components/Proximamente";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
    
     <Proximamente />
    
    </main>
  );
}
