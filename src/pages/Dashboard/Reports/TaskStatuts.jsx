import React, { useState } from "react";
 // 🎉 Import Confetti
import { FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import useQueryupdate from "../../../services/useQueryupdate";
import useQuerygetSpacficIteam from "../../../services/QuerygetSpacficIteam";
import toast from "react-hot-toast";

const statusOptions = [
  { value: "فى تقدم", label: "في تقدم", icon: <FaSpinner className="text-yellow-500" /> },
  { value: "مكتملة", label: "مكتملة", icon: <FaCheckCircle className="text-green-500" /> },
  { value: "مغلقة", label: "مغلقة", icon: <FaTimesCircle className="text-red-500" /> },
];

const TaskStatuts = ({ missionid , setShowConfetti }) => {
  const { data } = useQuerygetSpacficIteam("missions", "missions", missionid);
  const currentStatus = data?.data?.status || "فى تقدم";
  const { isLoading, updateiteam } = useQueryupdate("missions", "missions");



  const handleUpdate = (event) => {
    const status = event.target.value;
    updateiteam(
      { data:{status} , id: missionid },
      {
        onSuccess: () => {
          if (status === "مكتملة") {
            toast.success("🎉 مبروك تم إكتمال المهمة بنجاح");
            setShowConfetti(true); // 🎉 Trigger confetti
            setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 sec
          }
          if (status === "مغلقة") {
            toast.success("🚫 تم إغلاق المهمة بنجاح");
          }
          if (status === "فى تقدم") {
            toast.success("🔄 المهمة الآن في مرحلة التقدم");
          }
        },
      }
    );
  };

 

  return (
    <div className="relative w-44">
      {/* 🎉 Confetti Effect */}
      

  

      {/* Status dropdown */}
      <select
        onChange={handleUpdate}
        defaultValue={currentStatus}
        className="w-full p-2 rounded-lg border bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
        disabled={isLoading}
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TaskStatuts;
