import clsx from 'clsx'
import me from '../../../assets/images/me.jpg'

const About = () => {
  return (
    <div id="about" className="py-10 flex items-center gap-5 lg:gap-10">
      <div className="w-1/2 shrink-0">
        <h3 className="fade-in mb-2 text-3xl">About</h3>
        <p className="fade-in">
          I am Muhamad Pradita Adiantama, i used to be called Pradita, Adir, or
          also Lyod. I was born in small city in Indonesia. When i was in 3
          grade student my father gave me Nokia phone. And that's when i played
          my first game on it. I remember when i was playing the game i always
          said to my friend "Only if i can make my own game, i will make it
          better than this". then when i was in high school i choose to be
          Computer And Network Engineer to learn code. after i graduate i made
          my first game with my teachers its called{' '}
          <a>"Si Jibi Belajar Pajak"</a> and work as Fullstack Developer at "PT.
          Fintek Digital Nusantara".
        </p>
      </div>
      <div className=" w-1/2 shrink-0 flex justify-center items-center">
        <div className="group relative perspective-[600px] w-72 h-80">
          <div className="peer/tl z-10 w-1/2 h-1/2 absolute top-0 left-0" />
          <div className="peer/tr z-10 w-1/2 h-1/2 absolute top-0 right-0" />
          <div className="peer/bl z-10 w-1/2 h-1/2 absolute bottom-0 left-0" />
          <div className="peer/br z-10 w-1/2 h-1/2 absolute bottom-0 right-0" />
          <img
            src={me}
            alt="pradita-adiantama"
            className={clsx(
              'transition-all duration-500 transform-3d rounded-2xl w-72 object-cover object-top h-80',
              'peer-hover/tl:rotate-x-20 peer-hover/tl:-rotate-y-20',
              'peer-hover/tr:rotate-x-20 peer-hover/tr:rotate-y-20',
              'peer-hover/bl:-rotate-x-20 peer-hover/bl:-rotate-y-20',
              'peer-hover/br:-rotate-x-20 peer-hover/br:rotate-y-20'
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default About
