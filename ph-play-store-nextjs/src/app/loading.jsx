import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary w-20 h-20"></span>
      </div>
    </div>
  );
};

export default loading;
