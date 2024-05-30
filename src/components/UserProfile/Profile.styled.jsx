import styled from 'styled-components';

export const ProfileWrap = styled.div`
    width: 330px;
    margin: 0 auto;
    background-color: #f2f7f7;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-bottom: 20px;

`;

export const Description = styled.div`
    width: 240px;
    margin: 0 auto;
    padding: 30px;
`;

export const UserAvatar = styled.img`
    border-radius: 50%;
    width: 100px;
    display: block;
    margin: 0 auto 20px;

`;

export const Name = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 15px;
`;

export const Tag = styled.p`
    text-align: center;
    margin-bottom: 10px;
    color: darkgray;
`;

export const Location = styled.p`
    text-align: center;
    color: darkgray
`;


export const StatsWrap = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 330px;
    margin: 0 auto;
    background-color: #d3eded;
    border-radius: 10px;

`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid grey;
    width: 110px;
    padding: 15px 15px;
`;

export const Label = styled.span`
    color: #434141;
    margin-bottom: 10px;
    
`;

export const Quantity = styled.span`
    color: black;
    font-size: 20px;
`;
