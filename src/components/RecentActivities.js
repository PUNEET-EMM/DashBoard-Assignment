import React from 'react';

const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-[#1F2937] rounded-lg shadow-lg p-4">
      <h2 className="text-white text-2xl mb-4 font-semibold">Recent Activities</h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-gray-300">
          <thead>
            <tr>
            <th className="bg-gray-800 text-gray-400">
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="p-2 text-lg">Username</th>
              <th className="p-2 text-lg">New Posts</th>
              <th className="p-2 text-lg">Followers</th>
              <th className="p-2 text-lg">Comments</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
          
              <tr key={index} className="hover:bg-gray-700">
              <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
               
                <td className="p-2">{activity.name}</td>
                <td className="p-2">{activity.postCount} new posts</td>
                <td className="p-2">{activity.followers}</td>
                <td className="p-2">{activity.comments}</td>
                <td className="p-2">{activity.activityDate}</td>
              </tr>
            ))}
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;
