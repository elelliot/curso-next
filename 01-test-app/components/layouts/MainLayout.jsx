import styles from "./MainLayout.module.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
export const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home - ElElliot</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </div>
  );
};
