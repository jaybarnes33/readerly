import Head from "next/head";

import { Button } from "react-bootstrap";
import Book from "../components/Core/Book";
import Layout from "../components/Core/Layout";
import bestselling from "../data/bestselling";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Container from "../components/Core/Container";
import Header from "../components/Core/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Readerly</title>
        <meta
          name="description"
          content="Read and listen to your favorite ebooks"
        />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Header />
          <section className={styles.intro}>
            <div className={styles.intro_text}>
              <h1 className={styles.intro_heading}>Endless Knowledge</h1>
              <p>Read and listen to your favorite e-books </p>
              <Button variant="dark" className={styles.cta}>
                Start Reading{" "}
                <span className={`${styles.book_icon} `}>
                  <Image
                    width={24}
                    height={24}
                    src="/assets/openbook.svg"
                    alt="icon"
                  />
                </span>
              </Button>
              <br />
            </div>
          </section>
          <section className={styles.bestselling}>
            <div className={styles.bestselling_wrapper}>
              <div className={`${styles.bestselling_desc} heading`}>
                The Best-selling Books of 2021
              </div>

              <div className={styles.bestselling_items}>
                {bestselling.map((item, index) => (
                  <Book book={item} key={`item${index}`} />
                ))}
              </div>
              <div className={styles.overlay}></div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
