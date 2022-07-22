import React, { useState } from 'react'
import {useMetadata} from '../utils/useMetadata'

interface MetaProps {
  description: string;
  title: string;
  canonical?: string;
}

const About: React.FC = () => {
  const [metaTags, setMetaTags] = useState<MetaProps>({
    title: "About page",
    description: "Detail about us",
    canonical: "https://localhost:3003/about"
  })
  
  useMetadata(metaTags)
  console.log('about page is rendering')
  return (
    <div style={{fontSize: '3rem'}}>Home</div>
  )
}

export default About

