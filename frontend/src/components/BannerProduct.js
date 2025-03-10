



import React, { useEffect, useState } from 'react'
import { GrSearch } from "react-icons/gr";
import image1 from '../assest/banner/954_generated.jpg'
import image2 from '../assest/banner/vecteezy_online-shopping-on-phone-buy-sell-business-digital-web_4299835.jpg'
import image3 from '../assest/banner/vecteezy_shopping-online-on-smartphone-and-new-buy-sale-promotion_7153463.jpg'
import image4 from '../assest/banner/img3.jpg'
import image5 from '../assest/banner/img2.webp'


import image1Mobile from '../assest/banner/img1_mobile.jpg'
import image2Mobile from '../assest/banner/img2_mobile.webp'
import image3Mobile from '../assest/banner/img3_mobile.jpg'
import image4Mobile from '../assest/banner/img4_mobile.jpg'
import image5Mobile from '../assest/banner/img5_mobile.png'

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){
                nextImage()
            }else{
                setCurrentImage(0)
            }// eslint-disable-next-line
        },5000)

        return ()=> clearInterval(interval)
    },[currentImage])

  return (
    <div className='container mx-auto px-4 rounded '>
        <div className='h-130 md:h-100 w-full bg-slate-200 relative rounded-2xl'>

                <div className='absolute z-10 h-full w-full md:flex items-center hidden'>
                    <div className=' flex justify-between w-full text-2xl '>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
                            <GrSearch/>
                                    <input type='text' placeholder='search' className='outline-none ml-2'/>
                                    </div>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                        
                    </div>
                   
                    
                </div>
                

                {/**desktop and tablet version */}
              <div className=' hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='flex justify-center w-full h-130 min-w-full min-h-full transition-all ' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full rounded-2xl'/>
                                
                            </div>
                            
                            )
                        })
                }
                 
              </div>


                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                                
                            </div>
                            )
                        })
                }
              </div>

             
        </div>
        
    </div>
  )
}

export default BannerProduct