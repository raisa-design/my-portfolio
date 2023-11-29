
import { Header } from './components/header/header'
import './components/styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
        <Header/>      
        <div className='experience'>
          <h3>Experince</h3>
          <p>3 years of experience as a fullstack developer</p>
          <div className='experience-time'>

          </div>
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
        </div>
    </main>
  )
}
