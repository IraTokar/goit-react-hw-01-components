import {List, StatusType, Avatar, Name} from './FriendList.styled'

const FriendList = ({ friends }) => {
    return (
        friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <List key={id}>
                    <StatusType statusType={isOnline}></StatusType>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <Name>{name}</Name>
                </List>
                )
            })
        )   
}

export default FriendList;