import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Home from './pages/home'
import Projects from './pages/Projects'
import Photos from './pages/Photos'
import LayoutDefault from './layout/default'
import NotFound from './pages/NotFound'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="photos" element={<Photos />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
