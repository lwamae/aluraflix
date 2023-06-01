import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NuevosVideos from './pages/NuevosVideos';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import GlobalStyle from './GlobalStyle';
import NuevaCateg from './pages/NuevaCateg';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevosvideos' element={<NuevosVideos />} />
        <Route path='/nuevacateg' element={<NuevaCateg />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
