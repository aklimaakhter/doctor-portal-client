import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Booking from './Booking';
import BookingModal from './BookingModal';
import Loading from '../Shared/Loading';



const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    // console.log(services);
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));

    // }, [formattedDate])

    return (
        <div>
            <div className="h4 text-center text-xl text-secondary">Available Appointments on {format(date, 'PP')}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Booking
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Booking>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;