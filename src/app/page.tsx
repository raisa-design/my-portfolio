import { Experience } from './components/Experience/experience';
import { Header } from './components/header/header';
import { Info } from './components/information/information';
import { EmailIcon } from './components/icons/email-icon';
import Image from '../../public/email-icon.svg';
import './components/styles/home.scss';
import { SocialBtns } from './components/social-btns/social-btns';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />
      <div className='buttons'>
        <SocialBtns />
        <div className='social'></div>
        <a
          className='btn-primary'
          href='mailto:almeida.alves.raisa@gmail.com'
          target='_blank'
        >
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
