import About from './components/About'
import Hero from './components/Hero'
import Project from './components/Project'
import Container from '@components/Container'
import TechStack from './components/TechStack'

const HomePage = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <div className="py-10 bg-zinc-200">
        <Container>
          <About />
        </Container>
      </div>
      <Container>
        <TechStack />
      </Container>
      <div className="py-10 bg-zinc-200">
        <Container>
          <Project />
        </Container>
      </div>
    </>
  )
}

export default HomePage
