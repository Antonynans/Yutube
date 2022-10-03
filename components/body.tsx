import { Navbar } from "./navbar"
import { VideoPlayer } from "./videoPlayer"
import { IOpen } from "../models/isOpen";

interface IBody {
  data: any
  isOpen: boolean
}

export const Body: React.FC<IBody> = ({data, isOpen}) => {
  return (
    <div className={isOpen? `relative min-h-screen z-0 lg:ml-52 lg:pt-0 pt-5` : 'lg:ml-10'}>
        <Navbar />
        <VideoPlayer data={data} />
    </div>
  )
}