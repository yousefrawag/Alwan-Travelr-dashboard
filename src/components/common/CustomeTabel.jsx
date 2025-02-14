import DataTable from "react-data-table-component";

const CustomeTabel = ({ columns, data }) => {
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#1a222c", // Light gray background for the header
        color: "#ffffff", // Darker text for better readability
        fontWeight: "bold", // Bold text for the header
        fontSize: "16px", // Larger font size for header cells
      },
    },
    rows: {
      style: {
        fontSize: "14px", // Font size for rows
        backgroundColor: "#24303f",
        color: "#ffffff", // Darker text for better readability
      },
    },
  };

  return (
    <>
      <div className="p-4 space-y-4  rounded-md shadow-xl bg-[#24303f]">
        <div>
          <DataTable
            columns={columns}
            data={data}
            selectableRows
            fixedHeader
            pagination
            customStyles={customStyles} // Apply custom styles here
            className="bg-blue-50 rounded-lg text-sm text-gray-700 border-none"
          />
        </div>
      </div>
    </>
  );
};

export default CustomeTabel;
