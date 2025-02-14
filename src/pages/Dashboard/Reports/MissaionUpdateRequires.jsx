import React, { useEffect, useState } from 'react';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import useQueryupdate from '../../../services/useQueryupdate';
import toast from 'react-hot-toast';

const MissaionUpdateRequires = ({ id }) => {
    const { data, isLoading } = useQuerygetSpacficIteam("missions", "missions", id);
    const CurrentMission = data?.data;
    const Sections = CurrentMission?.requirements || [];
    const { updateiteam } = useQueryupdate("missions", "missions");

    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        if (Sections) {
            setRequirements(Sections);
        }
    }, [Sections]);

    // ✅ Auto-update function when checkbox is clicked
    const handelCangereqstauts = (req) => {
        const updatedRequirements = requirements.map((requirement) =>
            requirement === req ? { ...requirement, complated: !requirement.complated } : requirement
        );

        setRequirements(updatedRequirements);

        // ✅ Send the update request immediately
        updateiteam(
            { data: { requirements: updatedRequirements }, id },
            {
                onSuccess: () => {
                    toast.success("تم تحديث المهمة بنجاح ✅");
                },
                onError: (error) => {
                    toast.error(error.response?.data?.mesg || "حدث خطأ، حاول مرة أخرى ❌");
                },
            }
        );
    };

    return (
        <div className='mt-5 mb-5'>
            <h1>متطلبات المهمة </h1>
            <ul className="mt-7 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {requirements.map((req, index) => (
                    <li key={index} className="flex justify-between text-black dark:text-white shadow-md border-[1px] border-gray-500 p-4 rounded-[10px]">
                        <input
                            type="checkbox"
                            checked={req.complated}
                            onChange={() => handelCangereqstauts(req)}
                            className="accent-main"
                        />
                        - {req.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MissaionUpdateRequires;
