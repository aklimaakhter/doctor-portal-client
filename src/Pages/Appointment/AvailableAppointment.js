import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from './Booking';



const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(services.json)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <div className="h4 text-center text-xl text-secondary">Available Appointments on {format(date, 'PP')}</div>
            <div>
                {
                    services.map(service => <Booking
                        key={service._id}
                        service={service}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;