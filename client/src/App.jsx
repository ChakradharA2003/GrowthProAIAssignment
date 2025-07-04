import React, { useState } from 'react'
import axios from 'axios'

import Header from './components/Header'

const apiStates = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

function App() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [businessData, setBusinessData] = useState(null)
  const [apiStatus, setApiStatus] = useState(apiStates.initial)
  const [error, setError] = useState('')

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value)
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name && !location) {
      setError('*Both fields are required')
      return
    }
    if (!name) {
      setError('*Business name is required')
      return
    }
    if (!location) {
      setError('*Location is required')
      return
    }

    setApiStatus(apiStates.loading)
    try {
      const res = await axios.post('https://growthproaiassignment.onrender.com/api/business-data', {
        name,
        location,
      })
      setBusinessData(res.data)
      setApiStatus(apiStates.success)
    } catch {
      setError('Something went wrong')
      setApiStatus(apiStates.failure)
    }
  }

  const handleRegenerate = async () => {
    try {
      const res = await axios.get('https://growthproaiassignment.onrender.com/api/regenerate-headline', {
        params: { name, location },
      })
      setBusinessData((prev) => ({ ...prev, headline: res.data.headline }))
    } catch {
      setError('Unable to regenerate headline')
    }
  }

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Business Name"
        className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-500 text-gray-800 placeholder-gray-600 text-lg transition-all duration-300 md:text-xl"
        value={name}
        onChange={handleInputChange(setName)}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full px-4 py-2 bg-green-50 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-green-500 text-gray-800 placeholder-gray-600 text-lg transition-all duration-300 md:text-xl"
        value={location}
        onChange={handleInputChange(setLocation)}
      />
      {error && (
        <p className="text-red-500 text-sm font-medium bg-red-100/80 rounded-lg p-2 text-center animate-fade-in">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="w-full bg-green-500 cursor-pointer text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg animate-pulse-slow"
      >
        {apiStatus === apiStates.loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )

  const renderBusinessCard = () => (
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
  )

  const loadingView = () => (
    <div className="text-center text-green-700 font-medium animate-pulse">
      <div role="status">
    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
    </div>
  )

  const renderView = () => {
    switch (apiStatus) {
      case apiStates.loading:
        return loadingView()
      case apiStates.success:
        return businessData && renderBusinessCard()
      case apiStates.failure:
        return null
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-8">
  <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-6 space-y-6 transition-all duration-300 hover:shadow-xl relative">
    
    
    <button
      onClick={() => {
        setName('');
        setLocation('');
        setBusinessData(null);
        setError('');
        setApiStatus(apiStates.initial);
      }}
      className="absolute cursor-pointer top-4 right-4 text-green-700 hover:text-green-900 bg-transparent text-sm md:text-base font-semibold px-3 py-1 rounded transition-all duration-200"
    >
      Clear
    </button>

    <h1 className="text-4xl font-bold text-left text-green-700 mb-4 animate-fade-in md:text-2xl text-lg">
      Local Business SEO Dashboard
    </h1>

    {renderForm()}
    {renderView()}
  </div>
</div>

    </>
  )
}

export default App
