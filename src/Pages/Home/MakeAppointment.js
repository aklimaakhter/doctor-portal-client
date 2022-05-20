import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-secondary text-bold text-xl'>Appointment</h3>
                <h3 className='text-4xl text-white pb-5'>Make an appointment Today</h3>
                <p className='text-white py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <PrimaryButton>GET Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;