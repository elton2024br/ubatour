import Hero from './components/home/Hero';
import Categories from './components/home/Categories';
import FeaturedTours from './components/home/FeaturedTours';
import Testimonials from './components/home/Testimonials';
import CallToAction from './components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedTours />
      <Testimonials />
      <CallToAction />
    </>
  );
}
