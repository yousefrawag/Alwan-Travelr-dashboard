import React from 'react';
import Breadcrumb from '../../../components/common/Breadcrumbs/Breadcrumb';
import CustomeTabel from '../../../components/common/CustomeTabel';
import MdouleAddCategoray from '../../../components/common/popupmdules/MdouleAddCategoray';
import { useDashboardContext } from '../../../context/DashboardProviedr';
import useQuerygetiteams from '../../../services/Querygetiteams';
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import useQueryDelete from '../../../services/useQueryDelete';
import EditmainCategory from '../../../components/common/popupmdules/EditmainCategory';
import LevelItem from '../../../components/ui/Levels/LevelItem';
const MainCategoray = () => {
  const { setmodule , handelEditmainCategory } = useDashboardContext();
  // fetch data
  const {
    isError,
    isLoading,
    data: categoryes,
  } = useQuerygetiteams('mainCategory', 'mainCategory');
  // cutome delete category
  const { deleteIteam } = useQueryDelete('mainCategory', 'mainCategory');
  const data = [
    {
      name: "وزارة الصحة",
      subcategories: [
        {
          name: "فرع 1",
          subcategories: [
            { name: "قسم 1", subcategories: [] },
            { name: "قسم 2", subcategories: [] },
          ],
        },
        {
          name: "فرع 2",
          subcategories: [],
        },
      ],
    },
    {
      name: "وزارة التعليم",
      subcategories: [
        {
          name: "فرع 1",
          subcategories: [{ name: "قسم 1", subcategories: [] }],
        },
      ],
    },
  ];

  return (
    <div>
            {/* main section header */}
            <div className="flex justify-between w-full">
              <Breadcrumb pageName="مستويات" />
              <button
                onClick={() => setmodule(true)}
                className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
                type="button"
              >
                إضافه مستوى
              </button>
            </div>
            {/* main section header */}
            <div className="p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-2 gap-4">
              {data.map((item , i) =>    <LevelItem key={i} level={item} />)}
            </div>
          </div>
        

            {/* modules popup */}

            <MdouleAddCategoray />
            <EditmainCategory />
            {/* modules popup */}
    </div>
  );
};

export default MainCategoray;
