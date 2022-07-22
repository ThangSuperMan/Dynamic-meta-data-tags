import React, {useEffect} from 'react'

interface MetaProps {
  description: string;
  title: string;
  canonical?: string;
}

export const useMetadata = (props: MetaProps) => {
  useEffect(() => {
    const title = document.head.querySelector("title")
    console.dir(title)
    console.log(title?.textContent)

    if (!title || title.textContent !== props.title) {
      const title = document.head.querySelector('title')
      const metaDescOrgTag = document.head.querySelector('meta[property="og:description"]')
      const metaDescTag = document.head.querySelector('meta[name=description]') 
      const metaCanonical = document.head.querySelector('link[rel=canonical]')

      if (title && metaDescOrgTag && metaDescTag && metaCanonical ) {
        title.textContent = props.title
        metaDescOrgTag.setAttribute('content', props.description)
        metaDescTag.setAttribute('content', props.description)
        metaCanonical.setAttribute('content', props.description)
      }

      console.log('metaDesc', metaDescOrgTag)
    } else {
      console.log('title exitsts')
    } 
  })
}

