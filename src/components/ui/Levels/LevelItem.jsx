const LevelItem = ({ level }) => {
    return (
      <ul className="pl-4 border-l-2 border-gray-300">
      <li className="relative mb-4">
        {/* Parent category */}
        <div className="py-2 px-4 bg-white shadow-md rounded-md inline-block relative z-10">
          {level.name}
        </div>
        
        {/* Connecting line to child */}
        {level.subcategories.length > 0 && (
          <div className="absolute left-[-20px] top-[50%] w-[20px] h-[2px] bg-gray-300"></div>
        )}

        {/* Render subcategories */}
        {level.subcategories.length > 0 && (
          <ul className="mt-2">
            {level.subcategories.map((subcategory, index) => (
              <LevelItem key={index} level={subcategory} />
            ))}
          </ul>
        )}
      </li>
    </ul>
    );
  };
  export default LevelItem