import Banner from '../componentes/Banner/Banner';
import VideoSlider from '../componentes/VideoSlider/VideoSlider';
import Categ from '../componentes/Categ';
import VideosList from '../componentes/VideoSlider/VideosList';

const Home = () => {
  return (
    <main>
      <Banner/>
      <VideosList/>
      <Categ/>
      <VideosList/>
      <Categ/>
      <VideosList/>
    </main>
  )
}

export default Home