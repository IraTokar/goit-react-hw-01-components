import styled from 'styled-components';

export const List = styled.li`
    width: 300px;
    margin: 0 auto;
    background-color: lightcyan;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    align-items: center;
`;

export const StatusType = styled.span`
    width: 15px;
    height: 15px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
    margin-left: 10px;
    width: 50px;
    height: 50px;
`;

export const Name = styled.p`
    margin-left: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    color: #333;
`;