import { Genres } from "../data/genre"
import { useRouter } from 'next/router';


export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="lg:flex hidden items-center gap-8 border-b-2 border-solid pb-4 pl-6 pt-5 mb-2 w-full bg-white overflow-scroll">
      {Genres?.map((item, index) => {
        return (
          <button key={index} className='border-2 px-2 py-1 cursor-pointer last:mr-24 whitespace-pre rounded-2xl bg-[rgba(0,0,0,0.05)] hover:bg-gray-200 active:bg-gray-900 active:text-white'
          onClick={() => router.push(`/?query=${item.toLowerCase()}`)}>
            {item}
          </button>
        )
      })}
    </div>
  )
}