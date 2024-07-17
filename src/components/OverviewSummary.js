import React from 'react';

const OverviewSummary = ({ totalUsers, totalFollowers, totalPosts, totalComments }) => {
  return (
    <div className="stats shadow bg-gray-950  rounded-lg p-4 mb-4 flex  justify-evenly gap-2 ">
      <div className="stat">
        <div className="stat-title text-gray-400">Total Users</div>
        <div className="stat-value text-white">{totalUsers}</div>
      </div>

      <div className="stat">
        <div className="stat-title text-gray-400">Total Followers</div>
        <div className="stat-value text-blue-400">{totalFollowers}</div>
      </div>

      <div className="stat">
        <div className="stat-title text-gray-400">Total Posts</div>
        <div className="stat-value text-pink-400">{totalPosts}</div>
      </div>

      <div className="stat">
        <div className="stat-title text-gray-400">Total Comments</div>
        <div className="stat-value text-green-400">{totalComments}</div>
      </div>
    </div>
  );
};

export default OverviewSummary;
