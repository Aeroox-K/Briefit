import { BriefIt } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col' >
      <nav className='flex justify-between items-center w-full mt-4 mb-10 py-3 '>
        <a href="/">
        <img src={BriefIt} alt="logo"
        className='w-28 object-contain'/>
        </a>
      
        <button
          type='button'
          onClick={()=> window.open('https://github.com/Aeroox-K')}
          className='black_btn'>
          Github
        </button>
      </nav> 

      <h1 className='head_text' >
        Summarize Articles with <br className='max-md:hidden' /> 
        <span className='orange_gradient' >OPENAI GPT-4</span>
      </h1>

      <h2 className='desc'>
        Simplify your reading with summarizer, an open source 
        summarizer that transforms lenghty articles into clear 
        and conscise summaries
      </h2>

    </header>
  )
}

export default Hero;