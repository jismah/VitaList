import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

function login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VitaList | Login</title>
        <meta name="description" content="By John and Eduardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Login Panel</h1>
        <br/>
        <Link href="/">
          <Button colorScheme='red' variant='outline'>Back</Button>
        </Link>
        <Link href="/register">
          <Button colorScheme='red' variant='outline'>Register</Button>
        </Link>
      </main>
    </div>
  )
}

export default login