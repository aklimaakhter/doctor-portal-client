import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{
            background: `url(${bg})`,
            backgroundSize:'cover',
            backgroundPosition:'center'
        }}>
            <div  className="hero-content flex-col lg:flex-row-reverse bg-no-repeat bg-cover">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smiles Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;