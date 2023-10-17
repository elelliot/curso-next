import Image from "next/image";
import styles from "@/components/layouts/MainLayout.module.css";
import Link from "next/link";

import { MainLayout } from "@/components/layouts/MainLayout";
import { LightLayout } from "@/components/layouts/LightLayout";
import { ReactElement } from "react";

export default function AboutPage() {
  return (
    <>
      <div className={styles.description}>
        <p>
          You are currently in&nbsp;
          <code className={styles.code}>pages/about.tsx</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>Go to&nbsp;Home.</p>
        </Link>
        <Link href="/contact/" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Go to&nbsp;Contact.</p>
        </Link>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </a>
      </div>
    </>
  );
}

//Para aplicar layouts en diferentes paginas, debemos hacer esta configuracion (por pagina) y otra en el _app.tsx (usando pages router) ver docs
//Puedo aplicar esto en el proyecto de Vado
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
