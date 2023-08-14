import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import './CardBase.css'

const Card = ({ title }, courses) => {

    return (
        <div ref={courses} className='my-6'>
            <h1 className='mt-12 mb-6 md:mb-8 md:mt-12 mx-8 md:text-center text-3xl md:text-5xl font-bold'>Explore Our <span className='text-pink'>Courses</span></h1>
            <h1 className='my-6 mx-8 md:text-center text-2xl md:text-4xl font-bold'>Recommended <span className='text-pink'>Courses</span></h1>
            <div className='mt-4 md:flex gap-x-10 space-y-1 md:space-y-0'></div>
            <div className='mb-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="recommendedCoursesSwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="card course-card-shadow">
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:mx-10 pt-4">
                                <h2 className='text-2xl md:text-3xl font-bold'>MERN Stack</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXbZmeZg8sRK1fCQgz-LlX63veR4Oov7DcMW1Eeh2qHjk1TZYTt1GHSuMeM1qSnEtvmo&usqp=CAU" alt="Shoes" />
                            </div>
                            <div className='card-body'>
                                <p className='md:px-4 font-semibold text-[18px]'>Build an Android app that allows users to create and showcase their photography portfolio. Users can upload, organize, and share their digital photos with the world.</p>
                                <div className='flex justify-between md:px-10 py-2 text-lg'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Link to="/mern">
                                        <button className="allBtn px-2 py-2 text-lg bg-[#1ab79d] text-white font-bold">Explore more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact course-card-shadow">
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:mx-10 pt-4">
                                <h2 className='text-2xl text-center md:text-start md:text-3xl font-bold'>Data structure & Algorithms in C++</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPlQdcU3r56DSWZFNqXCrvtnsHoAokvvpZtBLh7t1SOQ5ZeK8KywnwhPvu6xyZhyxMp0&usqp=CAU" alt="Shoes" />
                            </div>
                            <div className='card-body'>
                                <p className='md:px-4 font-semibold text-[18px]'>Build an Android app that allows users to create and showcase their photography portfolio. Users can upload, organize, and share their digital photos with the world.</p>
                                <div className='flex justify-between md:px-10 py-2 text-lg'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Link to="/dsa">
                                        <button className="allBtn px-2 py-2 text-lg bg-[#1ab79d] text-white font-bold">Explore more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact course-card-shadow">
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between md:mx-10 pt-4">
                                <h2 className='text-2xl text-center md:text-start md:text-3xl font-bold'>Data structure & Algorithms in C++</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPlQdcU3r56DSWZFNqXCrvtnsHoAokvvpZtBLh7t1SOQ5ZeK8KywnwhPvu6xyZhyxMp0&usqp=CAU" alt="Shoes" />
                            </div>
                            <div className='card-body'>
                                <p className='md:px-4 font-semibold text-[18px]'>Build an Android app that allows users to create and showcase their photography portfolio. Users can upload, organize, and share their digital photos with the world.</p>
                                <div className='flex justify-between md:px-10 py-2 text-lg'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Link to="/dsa">
                                        <button className="allBtn px-2 py-2 text-lg bg-[#1ab79d] text-white font-bold">Explore more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default React.forwardRef(Card);