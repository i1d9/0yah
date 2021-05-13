import { useState, useEffect } from 'react';

export const Header = () => {

    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        var date = new Date();
        setLocalTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}));


    });

    return <div className="headBar">

        <div className="notificationBar"></div>

        <div className="brand">
            <span>0yaah</span>
        </div>

        <div className="timeBar">
            <span>{localTime}</span>
        </div>
    </div>
}