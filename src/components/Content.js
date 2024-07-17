import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewSummary from './OverviewSummary';
import RecentActivities from './RecentActivities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPaperPlane, faComments, faBullhorn, faBookmark, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Content = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const totalUsers = users.length;
  const totalFollowers = users.reduce((sum, user) => sum + user.followers, 0);
  const totalPosts = users.reduce((sum, user) => sum + user.posts, 0);
  const totalComments = users.reduce((sum, user) => sum + user.totalComments, 0);

  const activities = users.map(user => ({
    name: user.name,
    postCount: user.posts,
    followers	:user.followers,
    comments	:user.totalComments
  }));

  const chartData = {
    labels: users.map(user => user.name),
    datasets: [
      {
        label: 'Followers',
        data: users.map(user => user.followers),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Posts',
        data: users.map(user => user.posts),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Comments',
        data: users.map(user => user.totalComments),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Activity Overview',
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: users.map(user => user.name),
      },
      y: {
        type: 'linear',
      },
    },
  };

  return (
    <div className="p-3">
      <OverviewSummary
        totalUsers={totalUsers}
        totalFollowers={totalFollowers}
        totalPosts={totalPosts}
        totalComments={totalComments}
      />

      <div className=" mt-3 mb-8 bg-gray-950  p-4">
        <Bar data={chartData} options={chartOptions} />
      </div>

     

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
        {users.map(user => (
          <div key={user.id} className="card shadow-lg p-4 bg-gray-950 rounded-lg">
            <h2 className="card-title text-xl text-white">{user.name}</h2>
            <p className="text-gray-400">{user.category}</p>
            <p className="mb-4 text-gray-300">{user.bio}</p>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FontAwesomeIcon icon={faUsers} className="h-6 w-6 text-blue-400" />
                </div>
                <div className="stat-title text-gray-400">Followers</div>
                <div className="stat-value text-blue-400">{user.followers}</div>
                <div className="stat-desc text-gray-500">{user.following} Following</div>
              </div>
            </div>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FontAwesomeIcon icon={faPaperPlane} className="h-6 w-6 text-pink-400" />
                </div>
                <div className="stat-title text-gray-400">Posts</div>
                <div className="stat-value text-pink-400">{user.posts}</div>
                <div className="stat-desc text-gray-500">{user.accountReached} Reached</div>
              </div>
            </div>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FontAwesomeIcon icon={faComments} className="h-6 w-6 text-green-400" />
                </div>
                <div className="stat-title text-gray-400">Comments</div>
                <div className="stat-value text-green-400">{user.totalComments}</div>
                <div className="stat-desc text-gray-500">{user.totalShares} Shares</div>
              </div>
            </div>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="stat-title text-gray-400">Ads Run</div>
                <div className="stat-value text-yellow-400">{user.adsRun}</div>
                <div className="stat-desc text-gray-500">{user.activePromotions} Active Promotions</div>
              </div>
            </div>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-purple-400" />
                </div>
                <div className="stat-title text-gray-400">Stories</div>
                <div className="stat-value text-purple-400">{user.totalStories}</div>
                <div className="stat-desc text-gray-500">{user.totalFollows} Follows</div>
              </div>
            </div>

            <div className="stats shadow bg-gray-800 rounded-lg p-4 mb-4">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FontAwesomeIcon icon={faBookmark} className="h-6 w-6 text-red-400" />
                </div>
                <div className="stat-title text-gray-400">Saves</div>
                <div className="stat-value text-red-400">{user.totalSaves}</div>
                <div className="stat-desc text-gray-500">{user.totalComments} Comments</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RecentActivities activities={activities} />

      
 

      
    </div>



  );
};

export default Content;





