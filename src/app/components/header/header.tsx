import './header.scss';
import Image from 'next/image';

export function Header() {
  return (
    <div className='header'>
      <div>
        <h1>Hi, Raisa</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image src='/user.png' alt={''} width={325} height={280} priority />
    </div>
  );
}
