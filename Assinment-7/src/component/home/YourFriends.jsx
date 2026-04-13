import React from "react";
import FriendCard from "../ui/FriendCard";
import useFriends from "../../hooks/useFriends";
import { FadeLoader } from "react-spinners";

const YourFriends = () => {
  const { friends, loading } = useFriends();
  return (
    <>
      <div className="min-h-screen bg-[#f8fafc] py-16 px-6 font-sans">
        <div className="max-w-7xl mx-auto mb-10 text-left">
          <h2 className="text-3xl font-bold text-[#1e293b]">Your Friends</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-4 flex flex-col items-center justify-center min-h-[400px]">
              <FadeLoader color="#244D3F" height={15} width={5} />
              <p className="mt-4 text-slate-500">Loading friends...</p>
            </div>
          ) : (
            friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default YourFriends;
