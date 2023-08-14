import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>problem solve coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="main-nav">
        <ul>
          <Link href="/">  <li>Home</li> </Link>
          <Link href="/about">  <li>About</li> </Link>
          <Link href="/contact">  <li>Contact</li> </Link>
          <Link href="/blogs">  <li>Blogs</li> </Link>
        </ul>
      </nav>
      <div className="main-para">
        <h1 className="code dummy">problem solve coder</h1>
        <Image className="home-img" src="/homeimg.avif" alt="this is coder image" width={250} height={160}/>
        <style jsx>
          {`
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }
          `}
        </style>
        <p className="para">all the programming language solution get <span className="here">here</span></p>
        <h2 className="popular">Popular Blogs</h2>
        <h3 className="javascript-para">How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>
        <h3 className="javascript-para">How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic</p>
        <h3 className="javascript-para">How to learn javaScript in 2023?</h3>
        <p>javaScript is a language used for web logic and see more</p>
      </div>
    </>
  );
}
