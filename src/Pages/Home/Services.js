import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: whitening
        }
    ];

    return (
        <div className='text-center py-26 '>
            <div className='mb-16'>
                <h3 className='text-xl text-primary uppercase my-4'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16'>
                {
                  services.map(service=><Service
                  key={service._id}
                  service={service}
                  ></Service>)  
                }
            </div>
        </div>
    );
};

export default Services;

