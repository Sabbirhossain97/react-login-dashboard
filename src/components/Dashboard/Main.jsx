import React from 'react'
import { Menu, Edit } from '../SvgComponents/SVG';
import applicants from "../../applicants.json"

function Main() {
    return (
        <div>
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-2">
                <div className='bg-black w-full sm:w-[500px] flex gap-4 flex-col px-4 py-8 sm:px-6 lg:px-8 '>
                    <div className='flex items-center justify-between'>
                        <p className='text-white text-[24px] leading-7 font-bold'>
                            Tesla Corp
                        </p>
                        <span className='cursor-pointer '>
                            <Menu />
                        </span>
                    </div>
                    <hr className="h-px border border-white opacity-25" />
                    <div className='text-white '>
                        <p className='font-bold text-[13px] leading-[19.5px]'>10th May 2024</p>
                        <p className='font-normal text-[13px] leading-[19.5px]'>Friday</p>
                    </div>
                    <hr className="h-px border border-white opacity-25 " />
                    <div className='text-white'>
                        <h3 className='font-normal text-[16px] leading-[19.5px]'>Total Live Jobs: 2</h3>
                    </div>
                    <div className='border border-zinc-700 rounded-lg bg-[#262728]'>
                        <div className='text-white px-4 py-[13px]'>
                            <p className='font-normal text-[16px] leading-[19.36px] flex justify-between'>
                                Frontend Developer
                                <span className='cursor-pointer'>
                                    <Edit />
                                </span>
                            </p>
                        </div>
                        <hr className=" border border-zinc-700 " />
                        <div className='text-white px-4 py-[13px]'>
                            <p className='font-normal text-[16px] leading-[19.36px] flex justify-between'>
                                Android Developer
                                <span className='cursor-pointer'>
                                    <Edit />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='text-white border border-zinc-700 flex flex-col gap-1 bg-[#262728] px-4 py-[17px] rounded-lg'>
                        <p className='font-semibold text-[16px] leading-[19.36px]'>Total Applicant</p>
                        <p className='font-bold text-[36px] leading-[43.5px]'>74</p>
                        <p className='text-[#00E0B8] font-semibold text-[16px] leading-[19.36px]'>+25 last week</p>
                    </div>
                    <div className='text-white border border-zinc-700 flex flex-col gap-1 bg-[#262728] px-4 py-4 rounded-lg'>
                        <p className='font-semibold text-[20px] leading-6'>Matched Applicants</p>
                        <ul className='flex flex-col pt-[16px]'>
                            {applicants.map((applicant, index) => (
                                <li key={index} className='flex justify-between py-4'>
                                    <div className='flex items-center gap-2'>
                                        <img src={applicant.avatar} alt="avatar" />
                                        <p className='font-normal text-[14px] leading-[17px]'>{applicant.name}</p>
                                    </div>
                                    <div>
                                        <p className='hover:text-[#00E0BB] transition duration-300 cursor-pointer underline font-normal text-[14px] leading-[17px]'>View Resume</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main