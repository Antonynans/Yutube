import { useRouter } from "next/router";
import { Items, MobileItems } from "../utils/sidebarData";


export const Sidebar = ({ isOpen }) => {
  const router = useRouter();

  return (
    <>
      <div className="lg:flex flex-col justify-between z-10 shadow-sm hidden">
        <ul className="flex flex-col fixed w-60 h-full overflow-y-scroll bg-white pb-20">
          {Items?.map((item, index) => {
            return (
              <li
                className="flex gap-4 h-12 items-center text-center cursor-pointer px-3 transition-none lg:my-4 lg:px-2 rounded-3xl mx-4 bg-white hover:bg-[#FC1503] hover:text-white"
                key={index}
                onClick={() =>
                  router.push(`/?query=${item.name.toLowerCase()}`)
                }
              >
                <div className="ml-2 bg-transparent">{item.icon}</div>
                <span
                  className={
                    isOpen
                      ? `font-semibold pr-4 hidden lg:flex items-center h-full bg-transparent text-left`
                      : "hidden"
                  }
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:hidden fixed bottom-0 w-full p-4 h-16 bg-white flex z-20">
        <ul className="flex items-center justify-between w-full bg-white">
          {MobileItems?.map((item, index) => {
            return (
              <li
                className="flex flex-col items-center justify-center bg-white"
                key={index}
                onClick={() =>
                  router.push(`/?query=${item.name.toLowerCase()}`)
                }
              >
                {item.icon}
                <span className="bg-white">{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
