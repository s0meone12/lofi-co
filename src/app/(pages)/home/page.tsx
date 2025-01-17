import TodoList from '@/components/TodoList/TodoList'
import React from 'react'
import YoutubeVideo from '@/components/YoutubeVideo/YoutubeVideo'
import Footer from '@/components/Footer/Footer'

// import CountDownTimer from '@/components/CountDownTimer/CountDownTimer'

export default function page() {
  return (
    <div>
      HOme page is here 
      <YoutubeVideo/>
    <TodoList/>
    <Footer/>
      </div>
  )
}
