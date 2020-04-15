import styled from 'styled-components';

const TaskbarStyle = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5vh;
    width: 100vw;
    background: rgba(0, 0, 0, .5);
    backdrop-filter: blur(15px);
    cursor: default;
    color: white;

    display: flex;
`;

const TaskbarLeft = styled.div`
    display: flex;
`;

const TaskbarIcons = styled.div`
    flex: 1;
    
    display: flex;
`;

const TaskbarRight = styled.div`
    display: flex;
`;

const ShowDesktop = styled.div`
    border-left: 1px solid rgba(255, 255, 255, .6);
    width: 8px;

    &:hover {
        background: rgba(255, 255, 255, .2);
    }
`;

export default TaskbarStyle;
export { TaskbarLeft, TaskbarIcons, TaskbarRight, ShowDesktop };
