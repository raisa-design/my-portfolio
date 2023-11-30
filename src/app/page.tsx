
import { Experience } from './components/Experience/experience'
import { Header } from './components/header/header'
import './components/styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
        <Header/>      
        <Experience/>
          <div className='infos'>
            <h3>Languages</h3>
            <div className='languages-info'>
              <span>En - intermediary</span>
              <span>PT-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className='education-info'>
              <span>emoji</span>
              <span></span>
            </div>
          </div>
          <div className="butons">
            <div className='social'>

            </div>
            <button>contact me</button>
          </div>
    </main>
  )
}
