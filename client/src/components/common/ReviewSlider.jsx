


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { comments } from "../../data/moreInfoDatas/comments";

import ReactStars from 'react-stars'
import { FaQuoteRight, FaStar,FaQuoteLeft } from 'react-icons/fa'




const ReviewSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
        
      };
  return (
    <div className="w-3/4 mx-auto">
        <div className="mt-20">
        <Slider {...settings}>
            {comments.map((comment) => (
                <div key={comment.id} className="bg-white h-[450px] text-black rounded-xl p-4 shadow-lg "> 
                    
                    <div className='flex justify-between mt-4'>
                            <div className='text-gray-500'>
                                {comment.date}
                            </div>
                            <div>
                                <ReactStars
                                count={5}
                                value={comment.rating}
                                size={20}
                                edit={false}
                                activeColor="#ffd700"
                                emptyIcon={<FaStar />}
                                fullIcon={<FaStar />}
                                />

                                
                            </div>
                        </div>
                        <div className='text-gray-500 mt-4 h-2/3 items-center flex'>
                            <span><FaQuoteLeft />{comment.review}<FaQuoteRight /></span>
                        </div>
                        <div className='flex items-center gap-4 mt-4 '>
                            <div>
                                <img src={comment.img} alt="user" />
                            </div>
                            <div className='text-gray-600 font-semibold'>
                                {comment.name}
                            </div>
                        </div>
                </div>    
                )
            )
            }
            {/* <ReviewCards/> */}
            </Slider>
        </div>      
    </div>
  )
}

export default ReviewSlider
