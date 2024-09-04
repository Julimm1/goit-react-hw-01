import React from "react";
import { Profile } from "./components/Profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <React.Fragment>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </React.Fragment>
  );
}

export default App;
