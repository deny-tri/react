import '@/utilities/style.css';
import '@/utilities/calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import toa from "@/assets/toa.png";

const Notice = () => {
    const [date, setDate] = useState<Date | Date[] | null>(new Date());

    const handleDateChange = (newDate: Date | Date[] | null) => {
        setDate(newDate);
    };

    return (
        <div className='container Notice'>
            <div className='row'>
                <div className='col-12 text-center mb-12'>
                    <div className='noticeImg'>
                        <img src={toa} alt="Announcement" className='img-fluid rounded' />
                        <p className='mt-2 fw-bold'>Pengumuman</p>
                    </div>
                </div>
            </div>
            <div className='row Imgnotice'>
                <div className='col-12 col-md-8 mb-4 mb-md-0'>
                    <div className='listDate border rounded p-3 bg-light'>
                        <ul className='list-unstyled'>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>[INFO SDM] | Juknis Cuti Tahunan, Istirahat Melahirkan, Izin, dll. (17 Oktober 2023)</a></li>
                            <li><a href="http://" className='text-decoration-none'>Read more...</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-4 d-flex flex-column align-items-center'>
                    <div className='calendar-container'>
                        <Calendar
                            onChange={handleDateChange}
                            value={date}
                            className='react-calendar'
                        />
                    </div>
                    <p className='text-center mt-3'>
                        <span className='fw-bold'>Selected Date:</span>{' '}
                        {Array.isArray(date) 
                            ? date.length === 2 
                                ? `${date[0].toDateString()} to ${date[1].toDateString()}` 
                                : 'No date selected' 
                            : date instanceof Date 
                                ? date.toDateString() 
                                : 'No date selected'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Notice;
