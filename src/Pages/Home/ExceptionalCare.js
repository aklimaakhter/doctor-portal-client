import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExceptionalCare = () => {
    return (
        <div className='container '>
            <div className=' flex flex-wrap justify-center items-center mb-32 '>
                <div className='flex-1 flex justify-end mr-16 mx-auto'>
                    <img className="w-80 h-80" src={treatment} alt="" />
                </div>
                <div className='flex-1 mr-28'>
                    <h2 className='text-3xl'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;