import Button from '@components/common/Button'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    let i = 0
    const idk = "Hello!, I'm Pradita Adiantama"
    let val = ''

    const interval = setInterval(() => {
      if (i < idk.length) {
        val += idk[i]
        i++
        setName(val)
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-10 lg:py-0 flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-20 h-fit lg:h-[50vh]">
      <div className="shrink-0 lg:max-w-1/2">
        <div className="items-start flex flex-col gap-3">
          <h3 className="fade-in text-2xl lg:text-4xl">
            A 19 years old Programmer that has many other hobbies
          </h3>
          <p className="text-sm lg:text-base fade-in text-zinc-500">
            Eager to learn new things
          </p>
          <div className="slide-left flex gap-3 mt-1">
            <Button>Get Started</Button>
            <Button buttonStyle="outline">Outline</Button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-5 justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/81001767?v=4"
          alt="github-profile"
          className="transition-transform duration-150 hover:scale-105 w-15 h-15 rounded-full"
        />
        <h3 className="text-xl flex items-center">
          {name}
          <span className="block type-pulse w-0.5 h-4 bg-black" />
        </h3>
      </div>
    </div>
  )
}

export default Hero
