import React from 'react';
import './calendar.scss';

const data = [
    {
        title: 'Daily Scrum',
        subtitle: 'iOS Team Scrum',
        time: '9:30 AM',
    },
    {
        title: 'New Web Templates',
        subtitle: 'New templates for all listings',
        time: '10:30 AM',
    },
    {
        title: 'Friday Lunch Beers',
        subtitle: 'Team social',
        time: '13:30 AM',
    },
    {
        title: 'Friday Lunch Beers',
        subtitle: 'Team social',
        time: '13:30 AM',
    },
    {
        title: 'Friday Lunch Beers',
        subtitle: 'Team social',
        time: '13:30 AM',
    },
    {
        title: 'Friday Lunch Beers',
        subtitle: 'Team social',
        time: '13:30 AM',
    },
    {
        title: 'Friday Lunch Beers',
        subtitle: 'Team social',
        time: '13:30 AM',
    },
];

const Calendar = () => {
    return (
        <div className='calendar'>
            <div className='calendarInner'>
                <h2>my calendar</h2>

                <div className='calendarDates'>
                    <div className='calendarDateBlock'>
                        <span className='date'>17</span>
                        <span className='day'>apr</span>
                    </div>
                    <div className='calendarDateBlock'>
                        <span className='date'>17</span>
                        <span className='day'>apr</span>
                    </div>
                    <div className='calendarDateBlock'>
                        <span className='date'>17</span>
                        <span className='day'>apr</span>
                    </div>
                    <div className='calendarDateBlock'>
                        <span className='date'>17</span>
                        <span className='day'>apr</span>
                    </div>
                </div>

                <div className='calendarEvents'>
                    {data.map((entry) => (
                        <div className='event'>
                            <div className='eventHeader'>
                                <p>{entry.title}</p>
                                <span>...</span>
                            </div>

                            <span className='subtitle'>{entry.subtitle}</span>
                            <span className='time'>{entry.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
