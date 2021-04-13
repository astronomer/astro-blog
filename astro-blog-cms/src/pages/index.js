import React from "react"
import './index.css'
import { Link } from 'gatsby';
import { Button, AstroLogo } from "@astronomer/spectra";

export default function Home() {
  return (
    <div>
      <div className='top'>
        <AstroLogo />
      </div>
      <div className='button'>
        <Button
          as={Link}
          label="Continue to Blog CMS"
          style={{ color: 'white' }}
          to="/admin"
          className="buttonGradient"
        />
      </div>
    </div>
  )
}
