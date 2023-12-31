import { SectionTitle } from '../SectionTitle/section-title';

import './experience.scss';

export function Experience() {
  return (
    <>
      <div className='experience'>
        <SectionTitle text='Experience' />
        <p>3 years of experience as a fullstack developer</p>
        <div className='experience-time'></div>
      </div>
    </>
  );
}
