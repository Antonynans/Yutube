import { Items, MobileItems } from "../data/sidebarData";
import { IOpen } from "../models/isOpen";

export const Sidebar: React.FC<IOpen> = ({isOpen}) => {
  return (
    <>
    {/* <div> */}
      <div className={ "md:flex flex-col justify-between mx-2 col-span-1 z-10 shadow-sm hidden"}>
        <ul className="flex flex-col fixed overflow-y-scroll h-[80%] bg-white">
          {Items?.map((item, index) => {
            return (
              <li className="flex gap-4 h-12 items-center text-center cursor-pointer p-3 transition-none hover:text-gray-600 md:p-2 bg-white" key={index}>
                {item.icon}
                <span className={isOpen ? `font-semibold pr-4 hidden lg:block bg-white`: "hidden"}>{item.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="md:hidden fixed bottom-0 w-full p-4 h-16 bg-white flex">
        <ul className="flex items-center justify-between w-full bg-white">
          {MobileItems?.map((item, index) => {
            return (
              <li className="flex flex-col items-center justify-center bg-white" key={index}>
                {item.icon}
                <span className="bg-white">{item.name}</span>
              </li>
            )
          })}
        </ul>
           {/* <footer>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Copyright</li>
            </ul>
          </footer> */}
      </div>
     
          {/* </div> */}
    </>
  )
};