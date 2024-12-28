import DataTable from "react-data-table-component";

const CustomeTabel = ({ columns, data }) => {
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#EFEEF4", // Light gray background for the header
        color: "#333", // Darker text for better readability
        fontWeight: "bold", // Bold text for the header
        fontSize: "16px", // Larger font size for header cells
      },
    },
    rows: {
      style: {
        fontSize: "14px", // Font size for rows
      },
    },
  };

  return (
    <>
      <div className="p-4 space-y-4 rounded-md">
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
