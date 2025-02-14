import React from 'react';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import Loader from '../../common/Loader';
import { formatDistanceToNow } from 'date-fns';

const arabicTimeAgo = (date) => {
    const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });

    // Replace English words with Arabic equivalents
    return timeAgo
       
};

const Messages = ({ chatID }) => {
    const { data, isLoading } = useQuerygetSpacficIteam("messages", "messages", chatID);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="p-4 h-[400px] overflow-y-auto space-y-4">
            {data?.messages?.map((item) => (
                <div key={item?._id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <img src={item?.senderID?.imageURL} alt="user" className="w-10 h-10 rounded-full" />
                            <span className="ml-2 font-medium text-gray-900 dark:text-white">{item?.senderID?.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {arabicTimeAgo(item?.createdAt)}
                        </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{item?.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
