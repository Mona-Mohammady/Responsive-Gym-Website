import React from "react";
import "../../styles/exercises.css";
import  lunges from "../../assets/img/lunges.png";
import  yoga from "../../assets/img/yoga-pose.png";
import  extended from "../../assets/img/extended.png";

const Exercises = () => {
    return (
        <>
            <section id="schedule">
                <div className="container exercises__container">
                    <div className="exercises__top">
                        <h2 className="section__title">
                            Benfits of <span className="highlights">Exercise</span>
                        </h2>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing  <br/> 
                         elit. Minus ea quam nemo  pariatur nam tempora quos.</p>

                    </div>

                    {/* exersice list */}
                    <div className="exercise__wrapper">
                        <div className="exercise__item" 
                        data-aos='zoom-in'
                            data-aos-duration="1500">
                            <span className="exercise__icon">
                                <img src={lunges} alt=""></img>
                            </span>
                            <div className="exercise__content">
                                <h4>Healthy Life</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aut possimus ducimus vero beatae quaerat!</p>
                            </div>
                        </div>

                        <div className="exercise__item"  data-aos='zoom-in'
                            data-aos-duration="1500">
                            <span className="exercise__icon">
                                <img src={yoga} alt=""></img>
                            </span>
                            <div className="exercise__content">
                                <h4>Increased Flexibility</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aut possimus ducimus vero beatae quaerat!</p>
                            </div>
                        </div>
                        <div className="exercise__item"  data-aos='zoom-in'
                            data-aos-duration="1500">
                            <span className="exercise__icon">
                                <img src={extended} alt=""></img>
                            </span>
                            <div className="exercise__content">
                                <h4>Reducing Body Pressure</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aut possimus ducimus vero beatae quaerat!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>)
}
export default Exercises;