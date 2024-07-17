import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faPaperPlane,
  faComments,
  faBullhorn,
  faBookmark,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white shadow-lg fixed pt-4">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Main Menu</h1>
      </div>
      <nav className="flex flex-col p-4">
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-blue-400 mr-2" />
          <span>Users</span>
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faPaperPlane} className="h-6 w-6 text-pink-400 mr-2" />
          <span>Posts</span>
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faComments} className="h-6 w-6 text-green-400 mr-2" />
          <span>Comments</span>
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6 text-yellow-400 mr-2" />
          <span>Ads</span>
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-purple-400 mr-2" />
          <span>Stories</span>
        </a>
        <a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md mb-2">
          <FontAwesomeIcon icon={faBookmark} className="h-6 w-6 text-red-400 mr-2" />
          <span>Saves</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;






