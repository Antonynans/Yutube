import { Navbar } from "./navbar"
import { VideoPlayer } from "./videoPlayer"

interface IBody {
  data: any
}

export const Body: React.FC<IBody> = ({data}) => {
  return (
    <div className="col-span-6 relative min-h-screen z-0">
      <div className="ml-4 lg:ml-20">
        <Navbar />
        <VideoPlayer data={data} />
      </div>
    </div>
  )
}