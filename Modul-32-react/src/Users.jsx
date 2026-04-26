import React, { Suspense, use } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
// function Users() {
//   const User = use(faceUser);
//   return (
//     <>
//       <Suspense fallback={<h2>Weating....</h2>}>
//         <h2>User: {User.length}</h2>
//         <h2>User: {User.name}</h2>
//       </Suspense>
//     </>
//   );
// }
// export default Users;

function UserList() {
  const users = use(fetchUsers); // এখানে সব ইউজার লোড হচ্ছে

  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} (Email: {user.email})
        </li>
      ))}
    </ol>
  );
}

// মেইন কম্পোনেন্ট যেখানে Suspense থাকবে
export default function Users() {
  return (
    <>
      <h1>All Users List</h1>
      <Suspense fallback={<h2>Waiting for data....</h2>}>
        <UserList />
      </Suspense>
    </>
  );
}
