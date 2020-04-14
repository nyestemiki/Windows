import React from 'react';
import TaskbarStyle, { TaskbarLeft, Start, TaskbarIcons, TaskbarRight } from './styles/TaskbarStyles';
import Icon from './Icon';

export default function() {
    return (
        <TaskbarStyle>
            <TaskbarLeft>
                <Start>
                    <Icon name="Start.png"/>
                </Start>
                <div>Search</div>
                <div>Taskview</div>
            </TaskbarLeft>
            <TaskbarIcons>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </TaskbarIcons>
            <TaskbarRight>
                <div>CLOCK</div>
            </TaskbarRight>
        </TaskbarStyle>
    )
}
