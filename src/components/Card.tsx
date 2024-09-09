import { type TimeTrackingData } from '../utils/data';
import IconEllipsis from '../icons/ellipsis';
import { selectedTimeFrame, type TimeFrame } from '../utils/store';
import { useStore } from '@nanostores/react';

type TimeFrameProps = {
  timeFrame: string;
  title: string;
  current: number;
  previous: number;
};

const TimeFrame = ({ timeFrame, title, current, previous }: TimeFrameProps) => {
  let previousLabel: string = '';
  switch (timeFrame) {
    case 'daily':
      previousLabel = 'Yesterday';
      break;
    case 'weekly':
      previousLabel = 'Last Week';
      break;
    case 'monthly':
      previousLabel = 'Last Month';
      break;

    default:
      break;
  }

  return (
    <div className='bg-blue-90 grid grid-cols-[max-content_1fr] xl:gap-y-2 items-center py-7 px-6 xl:p-[30px] rounded-2xl cursor-pointer hover:bg-blue-80'>
      <span className='text-white text-lg font-medium xl:col-start-1 xl:col-end-2'>{title}</span>
      <div className='w-max p-2 justify-self-end'>
        <IconEllipsis />
      </div>
      <span className='text-white text-[32px] xl:text-[56px] font-light xl:col-start-1 xl:col-end-2 xl:mt-4'>
        {current}hrs
      </span>
      <span className='text-violet-20 justify-self-end xl:col-start-1 xl:col-end-2 xl:justify-self-start'>
        {previousLabel} - {previous}hrs
      </span>
    </div>
  );
};

type CardProps = {
  timeTrackingData: TimeTrackingData;
};

const Card = ({ timeTrackingData }: CardProps) => {
  const $selectedTimeFrame = useStore(selectedTimeFrame);
  const timeFrame = timeTrackingData.timeFrames[$selectedTimeFrame];

  return (
    <div className={`${timeTrackingData.color} rounded-t-2xl rounded-b-3xl w-full`}>
      <div className='relative overflow-hidden w-full h-[38px] xl:h-11'>
        <div className='absolute -top-3 right-5'>
          <timeTrackingData.icon />
        </div>
      </div>
      <div className='relative z-20'>
        <TimeFrame
          key={$selectedTimeFrame}
          title={timeTrackingData.title}
          timeFrame={$selectedTimeFrame}
          current={timeFrame.current}
          previous={timeFrame.previous}
        />
      </div>
    </div>
  );
};

export default Card;
