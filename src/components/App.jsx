import user from '../data/user.json';
import Profile from './Profile/Profile';

import data from '../data/data.json';
import Statistics from './Statistics/Statistics';

import friends from '../data/friends.json';
import FriendList from './FriendsList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';




export default function App() {
  return <>
    <Profile user={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>

}




      // username={user.username}
      // tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // stats={user.stats}