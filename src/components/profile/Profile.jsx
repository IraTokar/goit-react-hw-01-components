import {ProfileWrap, Description, UserAvatar, Name, Tag, Location, StatsWrap, StatsItem, Label, Quantity} from './Profile.styled'


const Profile = ({username,tag,location,avatar,stats}) => {
  return (
<ProfileWrap>
  <Description>
    <UserAvatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <StatsWrap>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </StatsItem>
  </StatsWrap>
</ProfileWrap>
  );
};

export default Profile;