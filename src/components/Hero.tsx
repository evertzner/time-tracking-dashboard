import { selectedTimeFrame, type TimeFrame } from '../utils/store';
import { useStore } from '@nanostores/react';

type ButtonProps = {
  timeFrame: TimeFrame;
};

const Button = ({ timeFrame }: ButtonProps) => {
  const $selectedTimeFrame = useStore(selectedTimeFrame);

  const selectTimeFrame = () => {
    selectedTimeFrame.set(timeFrame);
  };

  return (
    <button
      onClick={selectTimeFrame}
      className={`${$selectedTimeFrame === timeFrame ? 'text-white' : 'text-violet-60'} hover:text-white text-lg capitalize w-max`}
    >
      {timeFrame}
    </button>
  );
};

const Hero = () => {
  return (
    <div className='flex flex-col bg-blue-90 rounded-2xl xl:row-start-1 xl:row-end-3'>
      <div className='grid grid-cols-[max-content_max-content] xl:grid-cols-1 place-content-center grid-rows-2 xl:grid-rows-[min-content_min-content_min-content] gap-x-5 bg-violet-70 px-9 py-10 rounded-2xl xl:pb-20'>
        <img
          className='w-[70px] h-[70px] xl:w-[94px] xl:h-[94px] border-[3px] rounded-full col-start-1 col-end-2 row-start-1 row-end-3 xl:row-start-1 xl:row-end-2'
          src='/image-jeremy.png'
          alt='profile-photo'
        />
        <span className='text-violet-20 col-start-2 col-end-3 xl:col-start-1 xl:col-end-2 row-start-1 row-end-2 xl:row-start-2 xl:row-end-3 self-end xl:mt-11'>
          Report for
        </span>
        <span className='text-white text-2xl xl:text-[40px] xl:leading-normal col-start-2 col-end-3 xl:col-start-1 xl:col-end-2 row-start-2 row-end-3 xl:row-start-3 xl:row-end-4 self-start font-light'>
          Jeremy Robson
        </span>
      </div>
      <div className='flex justify-around py-6 xl:flex-col xl:gap-5 xl:px-8'>
        <Button timeFrame='daily' />
        <Button timeFrame='weekly' />
        <Button timeFrame='monthly' />
      </div>
    </div>
  );
};

export default Hero;
