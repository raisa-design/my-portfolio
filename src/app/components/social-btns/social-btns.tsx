import { GithubIcon } from '../icons/github-icon';
import { InstaIcon } from '../icons/insta-icon';
import { LinkedinIcon } from '../icons/linkedin-icon';

import './social-btns.scss';

interface SocialBtns {}
export function SocialBtns() {
  return (
    <>
      <div className='social'>
        <a href='https://www.instagram.com/raisa_almeidaaa/'>
          <InstaIcon />
        </a>
        <a href='https://www.linkedin.com/in/raisa-almeida-7ab060191/'>
          <LinkedinIcon />
        </a>
        <a href='https://github.com/raisa-design'>
          <GithubIcon />
        </a>
      </div>
    </>
  );
}
