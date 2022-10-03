import { Genres } from "../data/genre"
import { useRouter } from 'next/router';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 15,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 15,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    module: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  
  return (
    // <div className=" bg-white w-full hidden lg:block gap-6">
    // <Carousel
    //       swipeable={true}
    //       draggable={false}
    //       // showDots={true}
    //       responsive={responsive}
    //       ssr={true} // means to render carousel on server-side.
    //       infinite={false}
    //       // autoPlay={props.deviceType !== "mobile" ? true : false}
    //       autoPlaySpeed={1000}
    //       keyBoardControl={true}
    //       customTransition="all .5"
    //       transitionDuration={500}
    //       containerClass="carousel-container"
    //       // removeArrowOnDeviceType={["tablet", "mobile"]}
    //       // deviceType={props.deviceType}
    //       dotListClass="custom-dot-list-style"
    //       itemClass="carousel-item-padding-40-px"
    //     >
    <div className="lg:flex hidden items-center gap-6 border-b-2 border-solid pb-4 pl-6 pt-5 mb-2 w-full bg-white overflow-scroll">
      {Genres?.map((item, index) => {
        return (
          <button key={index} className='border-[rgba(0,0,0,0.1)] border-2 px-2 py-1 cursor-pointer last:mr-24 rounded-2xl bg-[rgba(0,0,0,0.05)] hover:bg-gray-200 active:bg-gray-900 active:text-white'
          onClick={() => router.push(`/?query=${item.toLowerCase()}`)}>
            {item}
          </button>
        )
      })}
    </div>
    // </Carousel>
    // </div>
  )
}