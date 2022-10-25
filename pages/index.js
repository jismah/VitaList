import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import NavBar from "../components/Navbar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VitaList</title>
        <meta name="description" content="By John and Eduardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main className={styles.main}>

        <Heading as='h1' size='4xl' >
          Welcome to VitaList!
        </Heading>

      </main>
    </div>
  )
}
