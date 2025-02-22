import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CustomeTabel = ({ columns, data }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // دالة للتحقق من وضع الدارك مود
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };

    // تشغيل الدالة مرة عند التحميل
    checkDarkMode();

    // مراقبة تغييرات الـ class في body
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: isDarkMode ? "#1A222C" : "#F1F5F9",
        color: "#79818F",
        fontSize: "18px",
        fontWeight: "normal",
        border: "none"
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        color: isDarkMode ? "#ccc" : "#000",
        backgroundColor: isDarkMode ? "#202938" : "#FFF",
      },
    },
  };

  return (
    <div className="p-4 space-y-4 rounded-md bg-[#fff] dark:bg-boxdark">
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
        className="rounded-lg text-sm text-gray-700 border-none"
      />
    </div>
  );
};

export default CustomeTabel;
