

import { Inter } from "next/font/google";
import styles from "./page.module.css";
import MejorValoradas from "@/components/MasValoradas";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      
     <MejorValoradas />
    
    </main>
  );
}
