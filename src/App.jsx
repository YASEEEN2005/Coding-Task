import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const SearchAndOffers = lazy(() => import('./components/SearchAndOffers'))
const ReadyToDrive = lazy(() => import('./components/ReadyToDrive'))
const WhyValam = lazy(() => import('./components/WhyValam'))
const ReviewsAndBrands = lazy(() => import('./components/ReviewsAndBrands'))
const FaqAndTrip = lazy(() => import('./components/FaqAndTrip'))
const Footer = lazy(() => import('./components/Footer'))

import Loader from './components/Loader'
import SmoothScroll from './components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <div className="w-full min-h-screen font-sans overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <Suspense fallback={<Loader />}>
          <SearchAndOffers />
          <ReadyToDrive />
          <WhyValam />
          <ReviewsAndBrands />
          <FaqAndTrip />
          <Footer />
        </Suspense>
      </div>
    </SmoothScroll>
  )
}

export default App
