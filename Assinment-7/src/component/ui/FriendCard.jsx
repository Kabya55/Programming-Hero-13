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
        <span className="bg-[#ecfdf5] text-[#059669] text-xs font-medium px-3 py-1 rounded-full mb-2">
          {friend.tags[0]}
        </span>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full
    ${
      friend.status === "overdue"
        ? "bg-red-100 text-red-600"
        : friend.status === "almost due"
          ? "bg-yellow-100 text-yellow-600"
          : "bg-green-100 text-green-600"
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
