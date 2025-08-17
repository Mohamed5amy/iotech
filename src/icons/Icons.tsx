"use client"

import dynamic from "next/dynamic"
import searchAnimation from "./search.json"
import whatsappAnimation from "./whatsapp.json"
import phoneAnimation from "./phone.json"
import emailAnimation from "./email.json"
import twitterAnimation from "./twitter.json"
import facebookAnimation from "./facebook.json"
import googleAnimation from "./google.json"

const HoverLottie = dynamic(() => import("@/components/HoverLottie"), {
  loading: () => <div>Loading...</div>,
  ssr: false
})

export const Search = () => {
  return (
    <HoverLottie 
      icon={searchAnimation}
      w={36}
      h={36}
      play={false}
    />
  )
}

export const Whatsapp = () => {
  return (
    <HoverLottie 
      icon={whatsappAnimation}
      w={40}
      h={40}
      play={false}
    />
  )
}

export const Phone = () => {
  return (
    <HoverLottie 
      icon={phoneAnimation}
      w={40}
      h={40}
      play={false}
    />
  )
}

export const Email = () => {
  return (
    <HoverLottie 
      icon={emailAnimation}
      w={35}
      h={35}
      play={false}
    />
  )
}

export const Twitter = () => {
  return (
    <HoverLottie 
      icon={twitterAnimation}
      w={40}
      h={40}
      play={false}
    />
  )
}

export const Facebook = () => {
  return (
    <HoverLottie 
      icon={facebookAnimation}
      w={40}
      h={40}
      play={false}
    />
  )
}

export const Google = () => {
  return (
    <HoverLottie 
      icon={googleAnimation}
      w={40}
      h={40}
      play={false}
    />
  )
}