import React from 'react'
import { NextSeo } from 'next-seo';
import { BsYoutube } from 'react-icons/bs';


interface IProps {
  title?: string
  desc?: string
}



export const SEO: React.FC<IProps> = ({ title = '', desc = '' }) => {
const DEFAULT_DESC_META_TAG =
  'Browse and watch current and trending videos'

  return (
    <NextSeo
    title={(title)}
    description={desc ? desc : DEFAULT_DESC_META_TAG}
      additionalLinkTags={[{ rel: 'icon', href: '/youtube.jpg' }]}
      openGraph={{
        url: `https://yutubes.netlify.app`,
        title: title,
        description: desc,
        locale: 'en_us',
        site_name: 'Yutube',
      }}
      twitter={{
        handle: '@iiamtoni',
        site: '@iiamtoni',
        cardType: 'summary_large_image',
      }}
    />
  )
}
