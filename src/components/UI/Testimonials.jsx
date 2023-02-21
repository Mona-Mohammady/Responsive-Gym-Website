import React from "react";
import "../../styles/testimonials.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";




export default function Testimonials() {
    return (
        <>
            <section id="testimonials">
                <div className="container sliders">
                    
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide__item">
                                <div className="slide__img-01">
                                    <img src={avatar01} alt=""
                                    />
                                </div>
                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                     Perferendis architecto cum voluptates debitis neque modi voluptatem,
                                     </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="slide__item">
                                <div className="slide__img-02">
                                    <img src={avatar02} alt=""
                                    />
                                </div>
                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                     Perferendis architecto cum voluptates debitis neque modi voluptatem,
                                     </p>                            </div></SwiperSlide>
                        <SwiperSlide>
                        <div className="slide__item">
                                <div className="slide__img-03">
                                    <img src={avatar01} alt=""
                                    />
                                </div>
                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                     Perferendis architecto cum voluptates debitis neque modi voluptatem,
                                     </p>                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}

