import LinkedIn from '../assets/linkedin.png'
import InstaGram from '../assets/instagram.png'
import Github from '../assets/githubwhite.png'
import Notion from '../assets/notion.png'


const SocialMediaIcons = () => {
  return (
    <div
      className='flex justify-center md:justify-start my-10 gap-7'
    >
      {/* LinkedIn icon */}
      <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.github.com"
        rel="noreferrer" // no bugs with order browsers
        target='_blank' // opens in new tab
      >
        <img 
          alt='linkedin-link'
          src={LinkedIn}
        />
      </a>

      {/* notion icon */}
      <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.notion.com"
        rel="noreferrer" // no bugs with order browsers
        target='_blank' // opens in new tab
      >
        <img 
          className='w-[30px] h-[30px]'
          alt='notion-link'
          src={Notion}
        />
      </a>

      {/* github icon */}
      <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.github.com"
        rel="noreferrer" // no bugs with order browsers
        target='_blank' // opens in new tab
      >
        <img 
          className='w-[30px] h-[30px]'
          alt='github-link'
          src={Github}
        />
      </a>

      {/* instagram icon */}
      <a 
        className='hover:opacity-50 transition duration-500'
        href="https://www.instagram.com"
        rel="noreferrer" // no bugs with order browsers
        target='_blank' // opens in new tab
      >
        <img 
          alt='instagram-link'
          src={InstaGram}
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons