import React from 'react'
import '../Sections/Cate.css';
export default function Cate() {
  return (
    <div className="List-cate flex gap-6 items-baseline">
          <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]"> 
            <a href="\" className='flex items-center flex-col' >
            <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">iPhone</p>
            <img className="cateimg" src={require('../LandingPagesImg/iphone_1.png')} alt="iPhone" />

        </a>
          </div>
        <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]"> 
          <a href="\" className='flex items-center flex-col' >
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">iPad</p>
          <img className="cateimg" src={require('../LandingPagesImg/ipad.png')} alt="iPad" />

        </a>
        </div>
        <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]"> 
          <a href="\" className='flex items-center flex-col' >
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">Mac</p>
          <img className="cateimg" src={require('../LandingPagesImg/mac_1.png')} alt="Mac" />

        </a>
        </div>
        <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]"> 
          <a href="\" className='flex items-center flex-col' >
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">Apple Watch</p>
          <img className="cateimg" src={require('../LandingPagesImg/Apple-watch.png')} alt="Apple Watch" />

        </a>
          </div>
        <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]"> 
          <a href="\" className='flex items-center flex-col' >
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">Phụ kiện</p>
          <img className="cateimg" src={require('../LandingPagesImg/airtag.png')} alt="Phụ kiện" />

        </a>
          </div>
          </div>
  )
}
