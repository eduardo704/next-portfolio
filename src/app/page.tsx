import Image from 'next/image'
import Top from './components/main-page/top'
import Carreer from './components/main-page/carreer'
import Skills from './components/main-page/skills'

export default function Home() {
  return (
    <main>
      <div className="container">
        <Top></Top>
        <Carreer></Carreer>
        <Skills></Skills>
      </div>
    </main>
  )
}
