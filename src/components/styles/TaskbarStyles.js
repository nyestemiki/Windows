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

    & > * {
        width: 5vh;
        padding: 5px;
    }

    & > *:hover {
        background: rgba(255, 255, 255, .2);
    }
`;

const Start = styled.div`
`;

const TaskbarIcons = styled.div`
    flex: 1;
    
    display: flex;
`;

const TaskbarRight = styled.div`

`;

export default TaskbarStyle;
export { TaskbarLeft, Start, TaskbarIcons, TaskbarRight };
