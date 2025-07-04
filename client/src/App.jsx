import React, { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'

function App() {
      const [name, setName] = useState('');
      const [location, setLocation] = useState('');
      const [businessData, setBusinessData] = useState(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name && !location) {
          setError('*Both fields are required');
          return;
        }
        if (!name) {
          setError('*Business name is required');
          return;
        }
        if (!location) {
          setError('*Location is required');
          return;
        }
        setError('');
        setLoading(true);
        try {
          const res = await axios.post('https://growthproaiassignment.onrender.com/api/business-data', {
            name,
            location,
          });
          setBusinessData(res.data);
        } catch (err) {
          setError('Something went wrong');
        }
        setLoading(false);
      };

      const handleRegenerate = async () => {
        try {
          const res = await axios.get(`https://growthproaiassignment.onrender.com/api/regenerate-headline`, {
            params: { name, location },
          });
          setBusinessData((prev) => ({ ...prev, headline: res.data.headline }));
          setName('');
          setLocation('');
          setError('');
        } catch (err) {
          setError('Unable to regenerate headline');
        }
      };

      return (
        <>
        <Header />
        <div className="min-h-screen w-full bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 space-y-6 transition-all duration-300 hover:shadow-xl">
            <h1 className="text-4xl font-bold text-center text-green-700 mb-4 animate-fade-in md:text-2xl text-lg">
              Local Business SEO Dashboard
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-500 text-gray-800 placeholder-gray-600 text-lg transition-all duration-300 animate-slide-up md:text-xl text-lg"
                value={name}
                onChange={(e) => {setName(e.target.value)
                  setError('');  
                }}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-500 text-gray-800 placeholder-gray-600 text-lg transition-all duration-300 animate-slide-up md:text-xl text-lg"
                value={location}
                onChange={(e) => {setLocation(e.target.value),
                  setError('');
                }}
              />
              {error && <p className="text-red-500 text-sm font-medium bg-red-100/80 rounded-lg p-2 text-center animate-fade-in">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-500 cursor-pointer text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg animate-pulse-slow"
              >
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </form>

            {businessData && (
              <div className="p-4 mt-4 border border-green-200 rounded-xl shadow-md bg-green-50/80 space-y-3 transition-all duration-300 hover:shadow-lg animate-fade-in">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">{businessData.name}</h2>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                    {businessData.location}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-medium text-gray-800">{businessData.rating}</span> / 5.0
                  </div>
                  <div className="text-gray-600 font-medium">{businessData.reviews} reviews</div>
                </div>

                <p className="text-gray-800 font-medium italic bg-gray-100/50 p-3 rounded-lg">
                  {businessData.headline}
                </p>

                <button
                  onClick={handleRegenerate}
                  className="w-full cursor-pointer bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg animate-pulse-slow"
                >
                  Regenerate SEO Headline
                </button>
              </div>
            )}
          </div>
        </div>
        </>
      );
    }

export default App
