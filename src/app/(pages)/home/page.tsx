import TodoList from '@/components/TodoList/TodoList'
import React from 'react'
import YoutubeVideo from '@/components/YoutubeVideo/YoutubeVideo'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import RainToggleButton from '@/components/RainToggleButton/RainToggleButton'

// import CountDownTimer from '@/components/CountDownTimer/CountDownTimer'

export default function page() {
  return (
    <div>
      HOme page is here 
      {/* <Header/>
      <YoutubeVideo/>
    <TodoList/>
    <Footer/> */}
        <RainToggleButton/>
      </div>
  )
}
