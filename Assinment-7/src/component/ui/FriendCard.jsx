import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <>
      <Link
        to={`/friend/${friend.id}`}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center"
      >
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full mb-5"
        />
        <h3 className="text-xl font-bold text-[#1e293b]">{friend.name}</h3>
        <p className="text-sm text-[#64748b] mt-1 mb-4">
          {friend.days_since_contact}d ago
        </p>
        <div className="mb-5">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#CBFADB] text-[#244D3F] text-sm font-medium mr-3 px-3 py-1 rounded-full mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full
    ${
      friend.status === "overdue"
        ? "bg-[#EF4444] text-white "
        : friend.status === "almost due"
          ? "bg-[#EFAD44] text-white"
          : "bg-[#244D3F] text-white"
    }
  `}
        >
          {friend.status === "overdue"
            ? "Overdue"
            : friend.status === "almost due"
              ? "Almost Due"
              : "On Track"}
        </span>
      </Link>
    </>
  );
};

export default FriendCard;
