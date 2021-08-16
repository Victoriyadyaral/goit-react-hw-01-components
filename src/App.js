//import './App.css';
import Container from "./components/container/Container";
import Profile from "./components/social-profile/Profile";
import Statistics from "components/statistics/Statistics";
import FriendList from "components/friendList/FriendList";
import TransactionHistory from "components/transactionHistory/TransactionHistory";

import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
