import React, { useEffect, useState } from 'react';
import { useDashboardContext } from '../../../context/DashboardProviedr';
import useQueryupdate from '../../../services/useQueryupdate';
import toast from 'react-hot-toast';
const EditmainCategory = () => {
  const {
    editmainCategory,
    setEditmaincategory,
    mainCategory,
    setmainCategory,
  } = useDashboardContext();

  const { isError, isLoading, updateiteam } = useQueryupdate(
    'mainCategory',
    'mainCategory',
  );
  // hande edit main category
  const handelsubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);

      updateiteam(
        { id: mainCategory?._id, data },
        {
          onSuccess: () => {
            setEditmaincategory(false);
            setmainCategory({});
            toast.success('تم تعديل المستوى');
          },
        },
      );
    } catch (error) {}
  };
  // hande edit main category
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center top-0 right-0 bottom-0  ${
        editmainCategory ? 'flex' : 'hidden'
      }`}
    >
      <form
        onSubmit={handelsubmit}
        className="relative bg-white p-6 rounded-md shadow-lg w-full max-w-[500px] h-auto max-h-[90%] mx-auto	"
      >
        {/* Close Button */}
        <button
          onClick={() => setEditmaincategory(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          type="button"
        >
          ✕
        </button>

        {/* Content of the popup */}
        <div className="mb-5 mt-3 p-3">
          <label
            htmlFor="name"
            className="w-full  text-lg font-medium text-gray-700"
          >
            تعديل المستوى
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={mainCategory?.name || ''}
            onChange={(e) =>
              setmainCategory({ ...mainCategory, name: e.target.value })
            }
            placeholder="قم بكتابه المستوى"
            className="mt-3 text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
        >
          حفظ
        </button>
      </form>
    </div>
  );
};

export default EditmainCategory;
