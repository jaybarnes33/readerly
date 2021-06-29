import Head from "next/head";

import { Button, Container, Image } from "react-bootstrap";
import Book from "../components/Core/Book";
import Layout from "../components/Core/Layout";
import bestselling from "../data/bestselling";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Readerly</title>
        <meta
          name="description"
          content="Read and listen to your favorite ebooks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <section className={styles.intro}>
            <div className={styles.intro_text}>
              <h1 className={styles.intro_heading}>Endless Knowledge</h1>
              <p>Read and listen to your favorite e-books </p>
              <Button variant="dark" className={styles.cta}>
                Start Reading <Image src="/assets/openbook.png" alt="icon" />
              </Button>
              <br />
            </div>
          </section>
          <section className={styles.bestselling}>
            <Container>
              <div className={styles.bestselling_wrapper}>
                <div className={`${styles.bestselling_desc} heading`}>
                  The Best-selling Books of 2021
                </div>

                <div className={styles.bestselling_items}>
                  {bestselling.map((item, index) => (
                    <Book book={item} key={`item${index}`} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </main>
      </Layout>
    </>
  );
}
