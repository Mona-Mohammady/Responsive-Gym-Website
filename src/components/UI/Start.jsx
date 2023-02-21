import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
    return (
        <>
            <section id="classes">
                <div className="container">
                    <div className="start__wrapper row">
                        {/* Image */}
                        <div className="start__img col-md-3">
                           <div> <img src={trainerImg} alt="" data-aos='fade-left'
                                data-aos-duration="1500" /></div>
                        </div>

                        {/* Content */}
                        <div className="start__content col-md-8" data-aos='fade-right'
                            data-aos-duration="1500">
                            <div>
                            <h2 className="section__title">
                                Read to make a <span className="highlights">change?</span>
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Assumenda aut odit corporis culpa tempora eum esse est optio rerum! 
                                Quisquam repellendus ipsum odio corporis sint veritatis incidunt ad tempora quibusdam?</p>
                            <button className="register__btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default Start;