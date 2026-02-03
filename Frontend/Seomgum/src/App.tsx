import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ully" element={<HomePage waNumber="6281283822163" agentName="Ully" />} />
        <Route path="/armiyati" element={<HomePage waNumber="6281369459077" agentName="Armiyati" />} />
        <Route path="/dewi" element={<HomePage waNumber="6285857527865" agentName="Dewi" />} />
        <Route path="/tina" element={<HomePage waNumber="6281376037827" agentName="Tina" />} />
        <Route path="/ummi" element={<HomePage waNumber="081364662894" agentName="Ummi Umara" />} />
        <Route path="/nunung" element={<HomePage waNumber="08984656407" agentName="Nunung Rahmawati" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App