import styled, { keyframes } from 'styled-components';

const NotificationCenterAnim = keyframes`
    from {
        transform: translateX(100%);
    } to {
        transform: translateX(0%);
    }
`;

const NotificationCenterStyle = styled.div`
    display: ${p => p.active ? 'flex' : 'none'};
    position: absolute;
    right: 0;
    background: rgba(0, 0, 0, .6);
    backdrop-filter: blur(15px);
    width: 400px;
    height: 95vh;
    padding: 20px 20px 0 20px;
    animation: ${NotificationCenterAnim} .55s;
    color: red;
    flex-direction: column;
`;

const ManageNotifications = styled.div`
    width: 100%;
    text-align: right;

    & > span:hover {
        cursor: pointer;
        color: wheat;
    }
`;

const NotificationCenterNotificationsStyle = styled.div`
    flex: 1;
    margin: 10px 0;

    display: flex;
    ${p => p.empty ? 'place-items: center; place-content: center' : ''};
    flex-direction: column;
    color: rgba(255, 255, 255, .5);
    cursor: default;
`;

const Handlers = styled.div`
    display: flex;
    place-content: space-between;
    margin-bottom: 15px;

    & > div:hover {
        cursor: pointer;
        color: wheat;
    }
`;

const Handler = styled.div`
    display: ${p => p.hide ? 'none' : 'block'};
`;

const ControlsStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
`;

const ControlStyle = styled.div`
    background: ${p => p.active ? 'rgba(255, 0, 0, .7)' : 'rgba(255, 255, 255, .2)'};
    display: flex;
    flex-direction: column;
    place-content: space-between;
    color: white;
    height: 65px;
    padding: 5px;
    font-weight: 100;
    border: 1px solid transparent;
    font-size: .8rem;
    cursor: pointer;
    transition: background .35s;
    position: relative;

    & img {
        height: 15px;
        width: 15px;    
    }

    &:hover {
        border: 1px solid wheat;
        background: ${p => p.active ? 'rgba(255, 0, 0, 1)' : 'rgba(255, 255, 255, .35)'};
    }
`;

export default NotificationCenterStyle;
export { ManageNotifications, NotificationCenterNotificationsStyle, Handlers, Handler, ControlsStyle, ControlStyle };
