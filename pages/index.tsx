import React, {useEffect, useState} from 'react'
import type { NextPage } from 'next';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';
import { Body } from '../components/body';
import { BsYoutube } from 'react-icons/bs';
import axios from 'axios';
import { SEO } from '../components/seo';

interface IHome {
  // isOpen: IOpen
  toggleSidebar: any
  data: any,
}

const Home: NextPage<IHome> = ({data}) => {
  const [isOpen, setIsOpen] = useState(!false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 2000)
  }, [])

return (
  <>
  <SEO title='Yutube | Homepage'  />
      <main>
        <div className={mounted ? `block` : `hidden`}>
          <Header toggleSidebar={toggleSidebar} />
          <div className="lg:flex lg:mt-16">
            <Sidebar isOpen={isOpen} />
          </div>
          <Body data={data} isOpen={isOpen} />

        </div>
        <div className={mounted ? `hidden`: `grid place-items-center min-h-screen text-red-500`}>
          <BsYoutube size={115} />
        </div>
      </main>
    </>
  )
}

export default Home;

export async function getServerSideProps(context){
  const query = context.query.query;
  if (query){
    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: query,
        hl: 'en',
        type: 'v'
      },
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
      };
      const response = await axios.request(options);

      return {
        props: {
          data: response.data.contents
        }
      }
  }else{
    const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
    params: { hl: 'en'},
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
    };
    const response = await axios.request(options);

    return {
      props: {
        data: response.data.contents
      }
    }

  }
}
