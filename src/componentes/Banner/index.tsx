import './Banner.css'
import React from 'react'

interface BannerProps {
    adressImage: string
    textAlternative?: string
    
}

const Banner = ({ adressImage, textAlternative}:BannerProps) => {
    return (
        <header className='banner'>
            {/* <img src="/imagens/banner.png" alt= "O banner principal da página do Organo"/> */}
            <img src={adressImage} alt={textAlternative}/>
        </header>
        
    )
}

export default Banner;
