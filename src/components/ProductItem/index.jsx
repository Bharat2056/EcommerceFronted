import React from 'react'
import "../ProductItem/styles.css";
import { Link } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { MdZoomOutMap } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5';

const ProductItem = () => {
  return (
    <div className='productItem shadow-lg rounded-md border overflow-hidden'>
        <div className='group imgWrapper w-[100%] overflow-hidden rounded-md relative '>
          <Link to="/">
          <div className='img h-[240px] overflow-hidden'>
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-home_default/today-is-a-good-day-framed-poster.jpg" className='w-full'/>
          <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/49-home_default/today-is-a-good-day-framed-poster.jpg"
           className='w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105'/>
            </div>
            </Link>
            <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 
            bg-primary text-white rounded-lg p-1 text-[12px] font-[500]'>10%</span>

            <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-1 transition-all duration-700 group-hover:top-[15px]
            flex-col w-[50px] opacity-0 group-hover:opacity-100'>
              
              <Button className='!w-[35px] !h-[35px] !min-w-[35px] group !rounded-full !bg-white text-black hover:!bg-primary hover:text-white'>
                <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white '/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px] group !rounded-full !bg-white text-black hover:!bg-primary hover:text-white'>
                <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
                </Button>

                <Button className='!w-[35px] !h-[35px] !min-w-[35px] group !rounded-full !bg-white text-black hover:!bg-primary hover:text-white'>
                <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white'/>
                </Button>
            </div>
        </div>

        <div className='info p-3 '>
            <h6 className='text-[13px] '><Link to="/" className='link transition-all'>Soylent Green</Link></h6>
            <h3 className='text-[14px] title mt-1 font-[500] text-[rgba(0,0,0,0.9)] mb-1'>
            <Link to="/" className='link transition-all'>Siril Georgette Pink Color Saree with Blouse Piece</Link></h3>
            <Rating name="size-small" defaultValue={4} size='small' readOnly/>

            <div className='flex items-center gap-4'>
              <span className='oldPrice line-through text-gray-500 text-[15px] font-[500]'>$500</span>
              <span className='price text-primary text-[15px] font-[600]'>$400</span>
            </div>
        </div>
    </div>
  )
}

export default ProductItem