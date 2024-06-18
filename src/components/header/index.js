import React from 'react'
import vaultLogo from '../../media/vaultLogo.png'

const index = () => {
  return (
    <div className='header'>
        <div className='header_logo'>
        <img src={vaultLogo} alt="Vault storage" />
        <span>Vault</span>
        </div>
        <div className='.header_searchContainer'></div>
        <div className='header_icon'></div>
      
    </div>
  )
}

export default index
