import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
