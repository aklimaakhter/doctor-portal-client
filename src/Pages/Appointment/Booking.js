import React from 'react';

const Booking = ({ service, setTreatment }) => {
    const { name, slots } = service;
    // console.log(service,slots[0]);

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center my-12">
                <h2 className=" text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span >{slots[0]}</span> : <span> Try another date</span>
                    }</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    
                    <label htmlFor="booking-modal" onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-natural bg-gradient-to-r from-secondary to-primary font bold text-white ">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;