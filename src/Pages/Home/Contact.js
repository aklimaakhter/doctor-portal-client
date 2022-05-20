import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className='py-10'>
                <div className='text-center '>
                    <h3 className="text-xl text-primary font-bold">Contact Us</h3>
                    <h2 className="text-3xl text-white">Stay Connected With Us</h2>
                </div>
                <div className=" ">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Subject" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea name="message" id="" cols="15" rows="10" placeholder='Your Message' className="input input-bordered"></textarea>
                                </div>
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;