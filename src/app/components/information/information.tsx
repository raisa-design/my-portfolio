import { SectionTitle } from '../SectionTitle/section-title';
import './information.scss';

export function Info() {
  return (
    <>
      <div className='infos'>
        <SectionTitle text='Idiomas' />
        <div className='languages-info'>
          <span> EN- intermediary</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text='Educação' />
        <div className='education-info'>
          <span></span>
          <span>Bacharelado em Administração </span>
        </div>
      </div>
    </>
  );
}
