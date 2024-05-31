import {List} from './FriendList.styled'
import FriendListitem from './FriendsListItem';

const FriendList = ({ friends }) => (
    <List>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendListitem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))
        }
    </List>
);

export default FriendList;


