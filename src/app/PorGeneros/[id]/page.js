

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import CargarPopulares from "@/components/CargarPopulars";
import CargarGeneros from "@/components/CargarGeneros";

const inter = Inter({ subsets: ["latin"] });

export default function PorGeneros({params}) {
    const {id}=params;
  return (
    <main className={styles.main}>
      
     <CargarGeneros id={id}/>
    
    </main>
  );
}
