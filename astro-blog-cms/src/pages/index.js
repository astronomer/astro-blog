import React from "react"
import './index.css'
import { Button, AstroLogo } from "@astronomer/spectra";

export default function Home() {
  return (
    <body>
      <div className='top'>
        <AstroLogo />
      </div>
      <div className='button'>
        <Button
          as="button"
          label="Continue to Blog CMS"
          to="/admin/"
          type="external"
        />
      </div>
    </body>
  )
}
