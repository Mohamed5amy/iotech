"use client"


import React, { ReactNode, useState } from 'react'

const ServicesPopup = ({children} : {children : ReactNode}) => {

    const services = [
        {id : 0 , title : "This is service 0"},
        {id : 1 , title : "This is service 1"},
        {id : 2 , title : "This is service 2"},
        {id : 3 , title : "This is service 3"},
        {id : 4 , title : "This is service 4"},
        {id : 5 , title : "This is service 5"},
        {id : 6 , title : "This is service 6"},
        {id : 7 , title : "This is service 7"},
        {id : 8 , title : "This is service 8"},
        {id : 9 , title : "This is service 9"},
        {id : 10 , title : "This is service 10"},
        {id : 11 , title : "This is service 11"},
        {id : 12 , title : "This is service 12"},
        {id : 13 , title : "This is service 13"},
        {id : 14 , title : "This is service 14"},
        {id : 15 , title : "This is service 15"},
        {id : 16 , title : "This is service 16"},
        {id : 17 , title : "This is service 17"},
        {id : 18 , title : "This is service 18"},
    ]

    const [active, setActive] = useState(false)

  return (
    <>  
        {/* Trigger */}
        <div onClick={() => setActive(!active)} >{children}</div>
        {/* Popup */}
        {active && <div className='absolute top-[calc(16px+100%)] left-0 pb-16 p-6 rounded-br-3xl rounded-bl-3xl w-full bg-primary grid grid-cols-4 gap-10' data-aos="fade-up">
            {services.map((service , idx) => {
                return <div data-aos="fade-left" data-aos-delay={idx * 150} key={service.id}> <h3 className='text-white/70 transition-all hover:translate-x-1 hover:text-white cursor-pointer'> {service.title} </h3> </div>
            })}
        </div>}
    </>
  )
}

export default ServicesPopup