import React, { useState } from 'react';
import TaskbarStyle, { TaskbarLeft, TaskbarIcons, TaskbarRight, ShowDesktop } from './styles/TaskbarStyles';
import Icon from './Icon';
import IconStyle from './styles/IconStyles';
import Clock from './Clock';

export default function() {
    const [ theme ] = useState('dark');

    return (
        <TaskbarStyle>
            <TaskbarLeft>
                <Icon name="start" iconTitle="Start" theme={theme}/>
                <Icon name="search" iconTitle="Type here to search" theme={theme}/>
                <Icon name="taskView" iconTitle="Task View" theme={theme}/>
            </TaskbarLeft>
            <TaskbarIcons>
                <Icon name="edge" iconTitle="Edge" theme={theme} app/>
                <Icon name="chrome" iconTitle="Chrome" theme={theme} app/>
            </TaskbarIcons>
            <TaskbarRight>
                <Icon name="people" iconTitle="People" theme={theme}/>
                <Icon name="upArrow" iconTitle="Show hidden icons" theme={theme}/>
                <Icon name="sound" iconTitle="Speakers: 50%" theme={theme}/>
                <Icon name="ink" iconTitle="Windows Ink Workspace" theme={theme}/>
                <Icon name="keyboard" iconTitle="Touch keyboard" theme={theme}/>
                <IconStyle iconTitle="Thursday, April 16, 2020" wide>
                    <Clock theme={theme}/>
                </IconStyle>
                <Icon name="notifications" iconTitle="No new notifications" theme={theme}/>
                <ShowDesktop theme={theme}/>
            </TaskbarRight>
        </TaskbarStyle>
    )
}
