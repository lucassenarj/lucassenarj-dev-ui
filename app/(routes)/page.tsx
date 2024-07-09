import Header from '../_components/Header/Header';
import Banner from '../_components/Banner/Banner';
import Latest from '../_components/Latest/Latest';

export default function Home() {
  return (
    <div className="inner">
      <Header />
      <Banner />
      <Latest />
    </div>
  )
}
