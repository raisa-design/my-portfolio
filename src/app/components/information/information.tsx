import { SectionTitle } from '../SectionTitle/section-title';
import './information.scss';

export function Info() {
  return (
    <>
      <div className='infos'>
        <SectionTitle text='Languages' />
        <div className='languages-info'>
          <span> EN- intermediary</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text='Education' />
        <div className='education-info'>
          <span>emoji</span>
          <span></span>
        </div>
      </div>
    </>
  );
}
