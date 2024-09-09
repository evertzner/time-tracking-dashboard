import Hero from './Hero';
import { timeTrackingData } from '../utils/data';
import Card from './Card';

const Main = () => (
  <main className='gap-y-6 grid grid-flow-rows auto-cols-[327px] xl:gap-x-[30px] xl:grid-rows-2 xl:grid-cols-[repeat(4,255px)] items-start justify-items-center'>
    <Hero />
    {timeTrackingData.map((ttd) => (
      <Card key={ttd.title} timeTrackingData={ttd} />
    ))}
  </main>
);

export default Main;
