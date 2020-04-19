import React, { useState, useEffect } from 'react';
import ClockStyle from './styles/ClockStyles';

export default function({ darkTheme }) {
    const [time, setTime] = useState((new Date()).toLocaleTimeString());

    useEffect(
        () => {
            setInterval(() => {
                setTime((new Date()).toLocaleTimeString());
            }, 500);
        },
        []
    );

    return <ClockStyle darkTheme={darkTheme}>{time}</ClockStyle>
}
