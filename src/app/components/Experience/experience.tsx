import { SectionTitle } from '../SectionTitle/section-title';
import Image from 'next/image';

import './experience.scss';

export function Experience() {
  return (
    <>
      <div className='experience'>
        <SectionTitle text='Experience' />
        <p>3 anos de experiência como desenvolvedor fullstack</p>
        <div className='experienc-time'>
          <div className='experience-language'>
            <Image
              src='/react.png'
              alt={'Logo React'}
              width={40}
              height={40}
              priority
            />
            <div className='experience-unit'>
              <div className='experience-measure measure-2'>
                <span> 2 years</span>
              </div>
            </div>
          </div>
          <div className='experience-language'>
            <Image
              src='/js.png'
              alt={'Logo js'}
              width={40}
              height={40}
              priority
            />
            <div className='experience-unit'>
              <div className='experience-measure measure-3'>
                <span> 3 years</span>
              </div>
            </div>
          </div>
          <div className='experience-language'>
            <Image
              src='/ts.png'
              alt={'Logo ts'}
              width={40}
              height={40}
              priority
            />
            <div className='experience-unit'>
              <div className='experience-measure measure-2'>
                <span> 2 years</span>
              </div>
            </div>
          </div>
          <div className='experience-language'>
            <Image
              src='/csharp.png'
              alt={'Logo c#'}
              width={40}
              height={40}
              priority
            />
            <div className='experience-unit'>
              <div className='experience-measure measure-2'>
                <span> 2 years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
