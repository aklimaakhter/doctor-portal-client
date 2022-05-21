import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import BookingModal from './BookingModal';



const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/aklimaakhter/doctor-portal-client/main/public/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="h4 text-center text-xl text-secondary">Available Appointments on {format(date, 'PP')}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Booking
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;