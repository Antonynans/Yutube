import { Items, MobileItems } from "../data/sidebarData";
import { IOpen } from "../models/isOpen";

export const Sidebar: React.FC<IOpen> = ({isOpen}) => {
  return (
    <>
    {/* <div> */}
      <div className="lg:flex flex-col justify-between z-10 shadow-sm hidden">
        <ul className="flex flex-col fixed h-full overflow-y-scroll bg-white pb-20">
          {Items?.map((item, index) => {
            return (
              <li className="flex gap-4 h-12 items-center text-center cursor-pointer p-3 transition-none hover:text-gray-600 lg:p-2 bg-white" key={index}>
                {item.icon}
                <span className={isOpen ? `font-semibold pr-4 hidden lg:block bg-white w-40 text-left`: "hidden"}>{item.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="lg:hidden fixed bottom-0 w-full p-4 h-16 bg-white flex z-20">
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