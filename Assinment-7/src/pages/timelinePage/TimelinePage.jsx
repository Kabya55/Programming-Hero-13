import React, { useContext, useState } from "react";
import { InteractionContext } from "../../context/InteractionContext";
import { MessageSquare, Phone, Video, ChevronDown } from "lucide-react";

const TimelinePage = () => {
  const { interactions } = useContext(InteractionContext);
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Call", "Text", "Video"];

  const filteredInteractions = interactions.filter((item) => {
    if (filter === "All") return true;
    return item.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className=" bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className=" mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="text-3xl font-bold text-slate-800">Timeline</h1>
          </div>

          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-white border-slate-200 hover:bg-slate-50 text-slate-700 normal-case shadow-sm flex items-center gap-2"
            >
              <span className="text-slate-500 font-normal">Show:</span>
              {filter}
              <ChevronDown size={16} />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow-xl border border-slate-100"
            >
              {filterOptions.map((option) => (
                <li key={option}>
                  <a
                    onClick={() => {
                      setFilter(option);
                      document.activeElement.blur();
                    }}
                    className={`${filter === option ? "bg-emerald-50 text-[#244D3F] font-bold" : ""}`}
                  >
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {filteredInteractions.length === 0 ? (
          <div className="bg-white p-10 rounded-xl border border-dashed border-slate-300 text-center text-slate-500">
            No {filter !== "All" ? filter : ""} interactions found.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInteractions.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-5 hover:border-emerald-200 transition-all group"
              >
                <div className="bg-slate-50 p-3 rounded-full group-hover:bg-emerald-50 transition-colors">
                  {item.type.toLowerCase() === "text" && (
                    <MessageSquare
                      size={22}
                      className="text-slate-400 group-hover:text-emerald-600"
                    />
                  )}
                  {item.type.toLowerCase() === "call" && (
                    <Phone
                      size={22}
                      className="text-slate-400 group-hover:text-emerald-600"
                    />
                  )}
                  {item.type.toLowerCase() === "video" && (
                    <Video
                      size={22}
                      className="text-slate-400 group-hover:text-emerald-600"
                    />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-slate-700">
                    <span className="font-bold text-[#244D3F] capitalize">
                      {item.type}
                    </span>{" "}
                    with {item.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
