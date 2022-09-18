import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CitizenSci | Help Collect Data</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <Projects />
    </div>
  )
}
