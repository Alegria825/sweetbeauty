import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí agregarás /servicios, /galeria, /contacto en el futuro */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}