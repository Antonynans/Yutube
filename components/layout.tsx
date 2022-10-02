import { Sidebar } from "./sidebar"
import { IOpen } from "../models/isOpen"
import { Header } from "./header"
import { useEffect, useState } from "react";
import { BsYoutube } from 'react-icons/bs';
import { Navbar } from "./navbar";
import { Body } from "./body";

interface IProps {
  children: React.ReactNode
  toggleSidebar: any
  isOpen: boolean
  data: any
}

export const Layout: React.FC<IProps> = ({children, toggleSidebar, isOpen, data}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000)
  }, []);

  return (
    <>
      <main>
        <div className={mounted ? `block` : `hidden`}>
          <Header toggleSidebar={toggleSidebar} />
          <div className="lg:grid grid-cols-7 lg:mt-20">
            <Sidebar isOpen={isOpen}  />
            <Body data={data} />
            {/* <Navbar /> */}
            {children}
          </div>
        </div>
        <div className={mounted ? `hidden`: `grid place-items-center min-h-screen text-red-500`}>
          <BsYoutube size={115} />
        </div>
      </main>
    </>
  )
}