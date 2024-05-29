const FriendList = ({ friends }) => {
    return (
        friends.map(({ avatar, name, isOnline, id }) => {
            return (
                <li key={id}>
                    <span statusType={isOnline}></span>
                    <img class="avatar" src={avatar} alt="User avatar" width="48" />
                    <p class="name">{name}</p>
                </li>
                )
            })
        )   
}

export default FriendList;