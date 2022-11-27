import Image from 'next/image';
import { useState, useEffect } from 'react';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ReactPlayer from 'react-player/lazy';
import youtubeImg from '../public/youtube.jpg';

interface IData {
  data: any
}
export const VideoPlayer: React.FC<IData> = ({data}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000);
  }, []);

  return (
    <div className='flex flex-wrap gap-x-2 gap-y-4 px-4 items-center justify-start lg:my-10 mb-24 mt-16 w-full'>
      {data?.map((item, index) => {
        return (
          <div key={index} className='flex flex-col lg:h-[350px] items-center lg:w-auto w-full lg:shadow-3xl hover:opacity-80'>
            <div className='relative min-w-fit'>
              {loading ? (
                <>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${item?item.video.videoId: 'Ux_LFXpOrd4'}`} light height={220} width={350} />
                  <span className='absolute bottom-2 right-3 bg-black text-white p-0.5'>{item.video.lengthText}</span>
                </>
              ) : 
              <Skeleton height={220} width={350} />
              }
            </div>

            <div className='flex mt-4 lg:ml-0 ml-1 w-full'>
              <div className='rounded-full mr-3 w-10 h-10 object-cover'>
              <Image src={youtubeImg} alt='logo' />
</div>
              <div className='w-full'>
              <div className='flex justify-between lg:w-[20rem] m-1'>
                <h2 className='text-xl font-bold'>{item? item.video.title.length > 45? `${item.video.title.slice(0, 45)}...`: item.video.title:<Skeleton />}
              </h2>
              <div className='rounded-full h-10 w-10 text-center flex items-center justify-center transition-all hover:bg-gray-100'><BsThreeDots size={20} className='rotate-90' /></div>
            </div>
            <div className='opacity-60 font-semibold'>{loading? item.video.channelName: <Skeleton />}</div>
            <div className='flex opacity-60 font-semibold'>
              <p className='flex items-center justify-center text-center'>{loading? item.video.viewCountText : <Skeleton />} {loading? <BsDot />: <Skeleton />}</p>
              <p>{loading? item.video.publishedTimeText: <Skeleton />}</p>
            </div>
            </div>
          </div>
          </div>
        )
      })}
    </div>
  )
}