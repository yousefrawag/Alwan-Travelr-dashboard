import React, { useState } from "react";
import * as XLSX from "xlsx";

import { FiSearch, FiDownload, FiRefreshCcw, FiChevronDown } from "react-icons/fi";

const FiltertionHook = ({ params, setParams, filters  , filteredData, columns , key}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectChange = (e) => {
    setParams((prevParams) => ({
      ...prevParams,
      field: e.target.value,
    }));
  };

  const handleReset = () => {
    setParams({
      field: "",
      searchTerm: "",
      startDate: "",
      endDate: "",
    });
  };
  const convertToExcel = (data, columns, sheetName = "Sheet1") => {
    const headers = columns.map((col) => col.name);
    const rows = data.map((item) =>
      columns.map((col) => {
        const value = col.selector
          ? col.selector(item)
          : col.value.split(".").reduce((obj, key) => obj?.[key], item);
        return value || "";
      })
    );
    const worksheetData = [headers, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    return workbook;
  };
  const downloadExcel = (data, columns, filename = "data.xlsx") => {
    const workbook = convertToExcel(data, columns);
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleSearch = (e) => {
    setParams((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  return (
    <div className="mt-5 mb-5 bg-white shadow-lg p-6 rounded-lg flex flex-col lg:flex-row items-center gap-4 w-full">
      {/* Search Input */}
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full lg:w-1/3 bg-gray-50 shadow-sm">
        
        <input
          type="text"
          placeholder="ابحث..."
          value={params.searchTerm}
          onChange={handleSearch}
          className="w-full bg-transparent outline-none pl-2 text-black"
        />
        <FiSearch className="text-gray-500" />
      </div>

      {/* Custom Select Dropdown */}
      <div
        className="relative w-full lg:w-1/4 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 shadow-sm">
          <span className="text-main">
            {params.field
              ? filters.find((item) => item.value === params.field)?.name
              : "اختر نوع البحث"}
          </span>
          <FiChevronDown className="text-main" />
        </div>
        {isDropdownOpen && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border text-black border-gray-600 rounded-lg shadow-lg z-10">
            {filters.map((item) => (
              <li
                key={item.value}
                className="px-4 py-2 hover:bg-[#804DB8] hover:text-white transition-all"
                onClick={() => {
                  setParams((prev) => ({ ...prev, field: item.value }));
                  setIsDropdownOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 w-full lg:w-auto">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-md"
        >
          <FiRefreshCcw /> إعادة تعيين
        </button>
        <button
        onClick={() => downloadExcel(filteredData , columns ,"data.xlsx" )}
          className="flex items-center gap-2 bg-main hover:bg-[#2F3583] text-white px-4 py-2 rounded-lg shadow-md"
        >
          <FiDownload /> تحميل البيانات
        </button>
      </div>
    </div>
  );
};

export default FiltertionHook;
