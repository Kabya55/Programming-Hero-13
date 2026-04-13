import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { FadeLoader } from "react-spinners";

import {
  Phone,
  MessageSquare,
  Video,
  BellOff,
  Archive,
  Trash2,
} from "lucide-react";
import ErorPage from "../erorPage/ErorPage";
import { toast } from "react-toastify";
import { useContext } from "react";
import { InteractionContext } from "../../context/InteractionContext";

const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const { addInteraction } = useContext(InteractionContext);

  const expectedFriend = friends.find((f) => f.id === parseInt(id));

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <FadeLoader color="#244D3F" height={15} width={5} />
        <p className="mt-4 text-slate-500">Loading friends Details...</p>
      </div>
    );
  }

  if (!expectedFriend) {
    return <ErorPage></ErorPage>;
  }

  const handleCheckIn = (type) => {
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    addInteraction(type, expectedFriend);

    toast.success(`${type} with ${expectedFriend.name} at ${today}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-slate-100 object-cover"
            />
            <h2 className="text-2xl font-bold text-slate-800">
              {expectedFriend.name}
            </h2>
            <div className="flex flex-col items-center gap-2 mt-2">
              <div>
                {expectedFriend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#ecfdf5] text-[#059669] text-sm font-medium mr-3 px-3 py-1 rounded-full mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  expectedFriend.status === "overdue"
                    ? "bg-red-100 text-red-600"
                    : expectedFriend.status === "almost due"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                }`}
              >
                {expectedFriend.status}
              </span>
            </div>
            <p className="italic text-slate-500 mt-4">
              "{expectedFriend.bio || "No bio added yet."}"
            </p>
            <p className="italic text-slate-500 mt-4">
              <span>Preferred: </span>
              {expectedFriend.email || "No email added yet."}
            </p>
          </div>

          <div className="space-y-2">
            <button className="w-full bg-white hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-lg border border-slate-200 flex items-center justify-center gap-2 transition-all">
              <BellOff size={18} /> Snooze 2 Weeks
            </button>
            <button className="w-full bg-white hover:bg-slate-50 text-slate-700 py-3 px-4 rounded-lg border border-slate-200 flex items-center justify-center gap-2 transition-all">
              <Archive size={18} /> Archive
            </button>
            <button className="w-full bg-white hover:bg-red-50 text-red-600 py-3 px-4 rounded-lg border border-red-100 flex items-center justify-center gap-2 transition-all">
              <Trash2 size={18} /> Delete
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-[#244D3F]">
                {expectedFriend.days_since_contact}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Days Since Contact
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-3xl font-bold text-[#244D3F]">
                {expectedFriend.goal}
              </div>
              <div className="text-sm text-slate-500 mt-1">Goal (Days)</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
              <div className="text-xl font-bold text-[#244D3F]">
                {expectedFriend.next_due_date || "N/A"}
              </div>
              <div className="text-sm text-slate-500 mt-1">Next Due</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Relationship Goal
                </h3>
                <button className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-600 px-3 py-1 rounded transition-colors">
                  Edit
                </button>
              </div>
              <p className="text-slate-600">
                Connect every{" "}
                <span className="font-bold text-slate-900">
                  {expectedFriend.goal} days
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 transition-colors group"
              >
                <Phone className="text-slate-700 group-hover:scale-110 transition-transform mb-2" />
                <span className="text-sm font-medium text-slate-600">Call</span>
              </button>
              <button
                onClick={() => handleCheckIn("Text")}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 transition-colors group"
              >
                <MessageSquare className="text-slate-700 group-hover:scale-110 transition-transform mb-2" />
                <span className="text-sm font-medium text-slate-600">Text</span>
              </button>
              <button
                onClick={() => handleCheckIn("Video")}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 transition-colors group"
              >
                <Video className="text-slate-700 group-hover:scale-110 transition-transform mb-2" />
                <span className="text-sm font-medium text-slate-600">
                  Video
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
