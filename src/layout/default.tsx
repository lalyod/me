import { Outlet } from 'react-router-dom'
import Header from '../components/Header/index'

const LayoutDefault = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/*<Footer />*/}
    </div>
  )
}

export default LayoutDefault
