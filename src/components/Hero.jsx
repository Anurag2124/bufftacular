import React from "react"
import Button from "./Button"

export default function Hero () {
  return (
    <div className="min-h-screen flex flex-col gap-10 
    items-center justify-center text-center max-w-[800px] 
    w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
      <p>IT'S TIME TO GET</p>

      <h1 className="font-semibold text-4xl 
      sm:text-5xl md:text-6xl lg:text-7xl">BUFF<span className="text-blue-400">TACULAR</span></h1>
      </div>

      <p className="text-sm md:text-base font-light">I hereby agree to become
      <span className="text-blue-400 font-medium"> jaw-droppingly bufftacular</span> and accept all risks of becoming the local
      <span className="text-blue-400 font-medium"> mass montrosity</span>, finding shirts don't fit anymore, battling body dysmorphia, 
      and perhaps even developing a hint of narcissism along the way.</p>

      <Button func={()=>{
        window.location.href = '#generate'
      }} text = {"Accept & Begin"}/>
    </div>
  )
}