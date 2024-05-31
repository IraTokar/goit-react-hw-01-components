import { Item, StatusType, Avatar, Name } from './FriendList.styled'

const FriendListitem = ({ avatar, name, isOnline }) => (
    <Item>
        <StatusType statusType={isOnline}></StatusType>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>
)

export default FriendListitem;

