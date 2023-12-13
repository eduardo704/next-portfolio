import Image from 'next/image'
import Top from './components/main-page/top'
import Carreer from './components/main-page/carreer'
import Skills from './components/main-page/skills'

export default function Home() {
  return (
    <main>
        <Top></Top>
        <Carreer></Carreer>
        <Skills></Skills>
    </main>
  )
}
