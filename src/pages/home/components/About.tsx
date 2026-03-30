import clsx from 'clsx'
import me from '../../../assets/images/me.jpg'

const About = () => {
  return (
    <div id="about" className="py-10 flex items-center gap-5 lg:gap-10">
      <div className="w-1/2 shrink-0">
        <h3 className="fade-in text-3xl">About Me</h3>
        <br>
        <p class="fade-in">Hi, I’m <b>Pradita Adiantama</b>, though some people also call me <b>Pradita</b>, <b>Adit</b>, or <b>Lyod</b>. I grew up in a small city in Indonesia, and one of my earliest memories is when my dad gave me my first Nokia phone in third grade. I started playing games on it and remember telling my friends, <i>“If I could make my own game, I would make it better than this.”</i> That little spark stuck with me.</p><br><p class="fade-in">When I got to high school, I decided to follow that spark and studied <b>Computer and Network Engineering</b> to learn how to code. After graduation, I got the chance to create my first game with my teachers, called “<b>Si Jibi Belajar Pajak</b>”, which was an incredible learning experience.</p><br><p class="fade-in">Today, I work as a <b>Fullstack Developer at PT. Fintek Digital Nusantara</b>, where I get to build digital solutions every day. Looking back, it all started with that simple Nokia game, and my passion for creating and improving things continues to drive me forward.</p>
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
