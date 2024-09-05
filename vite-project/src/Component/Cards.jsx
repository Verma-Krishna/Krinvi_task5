import React from 'react'
import {Link} from "react-router-dom"
export default function Cards() {
  return (
    <>
    <div className="main w-full h-screen "   style={{backgroundColor:"#F2F9FF"}}>
     <div className="head  h-14"  style={{backgroundColor:"#F2F9FF"}}></div>
     <h1 className='ml-[8.3%] text-xl  font-bold text-black'  style={{backgroundColor:"#F2F9FF"}}>Your Plans</h1>
     <div className="center mt-4 w-full   flex justify-between "  style={{backgroundColor:"#F2F9FF"}}>
      <div className="box1  h-full w-[60%] ml-28   "  style={{backgroundColor:"#F2F9FF"}}>
        <div className="card1 bg-white mb-2 px-4 py-3 rounded-md">
          <div className="row1 flex justify-between items-center" >
            <h1 className='text-lg text-black font-bold font-sans '>Branch Name</h1>
            <img src="assets/download.png" className='w-7  py-2 px-1' />
          </div>
            <hr className='bg-black mb-2'/>
          <div className="row2 flex justify-between items-center mb-2">
            <h1 className='text-slate-700 text-xs font-medium'>Payment July 23rd, 2024</h1>
            <h1 className='text-slate-700 text-xs font-medium'>Amount : &nbsp;$30</h1>
          </div>
          <h1 style={{backgroundColor:"#E0F2FF"}} className=' rounded-lg px-1 text-black py-2 my-2 text-sm font-semibold flex items-center pl-8 relative'><h1 className='w-[2.5%] absolute left-0  h-[16%] mx-1 rounded-xl border-8 border-blue-600' style={{backgroundColor:"#0762D7"}}></h1>Your Next Invoice will be generated on 6th Aug 2024</h1>
        </div>
        <div className="card1 bg-white mb-2 px-4 py-3 rounded-md">
          <div className="row1 flex justify-between items-center" >
            <h1 className='text-lg text-black font-bold font-sans '>Branch Name</h1>
            <img src="assets/download.png" className='w-7  py-2 px-1' />
          </div>
            <hr className='bg-black mb-2'/>
          <div className="row2 flex justify-between items-center mb-2">
            <h1 className='text-slate-700 text-xs font-medium'>Payment July 23rd, 2024</h1>
            <h1 className='text-slate-700 text-xs font-medium'>Amount : &nbsp;$30</h1>
          </div>
          <h1 style={{backgroundColor:"#FBEECC"}} className=' rounded-lg px-1 text-black py-2 my-2 text-sm font-semibold flex items-center pl-8 relative'><h1 className='w-[2.5%] absolute left-0  h-[16%] mx-1 rounded-xl border-8 border-orange-400' style={{backgroundColor:"#0762D7"}}></h1>Your Next Invoice will be generated on 6th Aug 2024</h1>
        </div>
        <div className="card1 bg-white mb-2 px-4 py-3 rounded-md">
          <div className="row1 flex justify-between items-center" >
            <h1 className='text-lg text-black font-bold font-sans '>Branch Name</h1>
            <img src="assets/download.png" className='w-7  py-2 px-1' />
          </div>
            <hr className='bg-black mb-2'/>
          <div className="row2 flex justify-between items-center mb-2">
            <h1 className='text-slate-700 text-xs font-medium'>Payment July 23rd, 2024</h1>
            <h1 className='text-slate-700 text-xs font-medium'>Amount : &nbsp;$30</h1>
          </div>
          <h1 style={{backgroundColor:"#E0F2FF"}} className=' rounded-lg px-1 text-black py-2 my-2 text-sm font-semibold flex items-center pl-8 relative'><h1 className='w-[2.5%] absolute left-0  h-[16%] mx-1 rounded-xl border-8 border-blue-600' style={{backgroundColor:"#0762D7"}}></h1>Your Next Invoice will be generated on 6th Aug 2024</h1>
        </div>
        <div className="card1 bg-white mb-2 px-4 py-3 rounded-md">
          <div className="row1 flex justify-between items-center" >
            <h1 className='text-lg text-black font-bold font-sans '>Branch Name</h1>
            <img src="assets/download.png" className='w-7  py-2 px-1' />
          </div>
            <hr className='bg-black mb-2'/>
          <div className="row2 flex justify-between items-center mb-2">
            <h1 className='text-slate-700 text-xs font-medium'>Payment July 23rd, 2024</h1>
            <h1 className='text-slate-700 text-xs font-medium'>Amount : &nbsp;$30</h1>
          </div>
          <h1 style={{backgroundColor:"#FBEECC"}} className=' rounded-lg px-1 text-black py-2 my-2 text-sm font-semibold flex items-center pl-8 relative'><h1 className='w-[2.5%] absolute left-0  h-[16%] mx-1 rounded-xl border-8 border-orange-400' style={{backgroundColor:"#0762D7"}}></h1>Your Next Invoice will be generated on 6th Aug 2024</h1>
        </div>
      </div>
      <div className="box2 h-full w-[25%] mr-10 ">
          <div className="bg-white px-2 py-4 rounded-md mb-2">
            <h1 className='text-black font-bold mt-1'>Payments</h1>
            <div className="flex py-2 px-1">
              <h5 className=' text-sm leading-tight text-gray-600'>Manage what payment method(s) you can use to make payments</h5>
              <Link to="/invoice"><img src="assets/arrow-right.png" className='w-6 h-5 py-1  rounded border-2 border-slate-300'/></Link>
            </div>
          </div>
          <div className="bg-white px-2 py-4 rounded-md">
            <h1 className='text-black font-bold mt-1'>Invoices</h1>
            <div className="flex justify-between py-2 px-1">
              <h5 className=' text-sm leading-tight text-gray-600'>View and manage your past invoices</h5>
              <Link to='/invoice'><img src="assets/arrow-right.png" className='w-4 h-5 py-1  rounded border-2 border-slate-300'/></Link>
            </div>
          </div>
      </div>
     </div>
    </div>

    </>
  )
}
