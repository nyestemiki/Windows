import React, { useState } from 'react';
import TaskbarStyle, { TaskbarLeft, TaskbarIcons, TaskbarRight, ShowDesktop } from '../styles/TaskbarStyles';
import Icon from '../Icon';
import IconStyle from '../styles/IconStyles';
import Clock from '../Clock';
import TBvolume from './TBvolume';

export default function({ toggle, darkTheme }) {
    const [volume, setVolume] = useState(false);

    function toggleVolume() {
        setVolume(!volume);
    }

    return (
        <TaskbarStyle darkTheme={darkTheme}>
            <TaskbarLeft>
                <Icon name="start" iconTitle="Start" darkTheme={darkTheme}/>
                <Icon name="search" iconTitle="Type here to search" darkTheme={darkTheme}/>
                <Icon name="taskView" iconTitle="Task View" darkTheme={darkTheme}/>
            </TaskbarLeft>
            <TaskbarIcons>
                <Icon name="edge" iconTitle="Edge" darkTheme={darkTheme} app/>
                <Icon name="chrome" iconTitle="Chrome" darkTheme={darkTheme} app/>
            </TaskbarIcons>
            <TaskbarRight>
                <Icon name="people" iconTitle="People" darkTheme={darkTheme}/>
                <Icon name="upArrow" iconTitle="Show hidden icons" darkTheme={darkTheme}/>
                <Icon name="sound" iconTitle="Speakers: 50%" darkTheme={darkTheme} onClickFunction={toggleVolume}/>
                <Icon name="ink" iconTitle="Windows Ink Workspace" darkTheme={darkTheme}/>
                <Icon name="keyboard" iconTitle="Touch keyboard" darkTheme={darkTheme}/>
                <IconStyle iconTitle="Thursday, April 16, 2020" wide>
                    <Clock darkTheme={darkTheme}/>
                </IconStyle>
                <Icon name="notifications" iconTitle="No new notifications" darkTheme={darkTheme} onClickFunction={toggle}/>
                <ShowDesktop darkTheme={darkTheme}/>
            </TaskbarRight>

            <TBvolume active={volume} darkTheme={darkTheme}/>
        </TaskbarStyle>
    )
}
