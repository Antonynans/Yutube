import { Navbar } from "./navbar"
import { VideoPlayer } from "./videoPlayer"

interface IBody {
  data: any
}

export const Body: React.FC<IBody> = ({data}) => {
  return (
    <div className="relative min-h-screen z-0 lg:ml-52 lg:pt-0 pt-5">
        <Navbar />
        
        <VideoPlayer data={data} />
    </div>
  )
}