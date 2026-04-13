import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { InteractionContext } from "../../context/InteractionContext";

const StatsPage = () => {
  const { interactions } = useContext(InteractionContext);

  const textCount = interactions.filter((i) => i.type == "Text").length;
  const callCount = interactions.filter((i) => i.type == "Call").length;
  const videoCount = interactions.filter((i) => i.type == "Video").length;

  const data = [
    { name: "Text", value: textCount, fill: "#8B5CF6" },
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Video", value: videoCount, fill: "#34A853" },
  ];

  const hasData = interactions.length > 0;

  return (
    <>
      <div className=" bg-slate-50 p-8 font-sans mt-5 mb-5">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Friendship Analytics
          </h1>

          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-semibold text-[#244D3F] mb-10">
              By Interaction Type
            </h3>

            <div className="flex justify-center items-center h-[400px] w-full">
              {hasData ? (
                <div className="flex justify-center m-10">
                  <PieChart
                    width={500}
                    height={400}
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      maxHeight: "80vh",
                      aspectRatio: 1,
                    }}
                  >
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius="70%"
                      outerRadius="100%"
                      cornerRadius={10}
                      paddingAngle={5}
                      dataKey="value"
                      fill="#8884d8"
                      isAnimationActive={true}
                    ></Pie>

                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    />

                    <Legend
                      iconType="circle"
                      verticalAlign="bottom"
                      height={36}
                      formatter={(value, entry) => (
                        <span className="text-slate-600 text-sm ml-1">
                          {value}:{" "}
                          <span className="font-bold">
                            {entry.payload.value}
                          </span>
                        </span>
                      )}
                    />
                  </PieChart>
                </div>
              ) : (
                <div className="text-center text-slate-400">
                  <p>No data available yet.</p>
                  <p className="text-sm italic">
                    Start checking in with your friends to see analytics!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
