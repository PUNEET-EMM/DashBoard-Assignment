import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-64 right-0 bg-gray-800 p-2 shadow-md z-10">
         <div className="navbar bg-base-100 shadow-lg ">

      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Social Media Dashboard
        </a>
      </div>

     <div className='flex gap-4'>
      <label className="input input-bordered flex items-center gap-1">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>



      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="avatar online">
              <div className="w-13 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>


      </div>
    </div>
    </div>
  );
};

export default Navbar;

