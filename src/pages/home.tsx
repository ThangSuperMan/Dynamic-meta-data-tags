import React, { useState } from 'react'
import {useMetadata} from '../utils/useMetadata'

interface MetaProps {
  description: string;
  title: string;
  canonical?: string;
}

const Home: React.FC = () => {
  const [metaTags, setMetaTags] = useState<MetaProps>({
    title: "Home page",
    description: "Home page description",
    canonical: "https://localhost:3003"
  })
  
  useMetadata(metaTags)
  return (
    <div style={{fontSize: '3rem'}}>Home</div>
  )
}

export default Home
