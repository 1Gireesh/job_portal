import React, { useState } from 'react'
import "../styles/recent_jobs.css";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { optionsIcon } from "../assets/index";
const jobObj = {
    title: "Accounts Payable Officer",
    companyName: "Esco inc .",
    location: "New York, NY",
    jobType: "Full Time",
    jobTime: "9am - 5pm EST",
    description: "This role is open to recent University graduates and applicants with less than 5 years of prior experience in a quantitative trading role, for commencement in Austinmer. Our graduate program offers a high l....."
}

export default function RecentJobs() {

    const [recentJobs, setJobs] = useState(new Array(4).fill(jobObj))

    return (
        <div className='recent_jobs'>
            <h2 className='recent_jobs_heading'>Recently Posted Jobs</h2>
            <div className='recent_job_list'>
                {recentJobs.map((job, i) => (
                    <div className='recent_job_card' key={i}>
                        <div className='recent_job_box_1'>
                            <h3>{job.title}</h3>
                            <div className='recent_job_menu'>
                                <img src={optionsIcon} alt='' className='recent_job_menu_icon' />
                            </div>
                        </div>
                        <div className='recent_job_company'>
                            <h4>{job.companyName}</h4>
                            <h6>{job.location}</h6>
                        </div>
                        <div className='recent_job_box_2'>
                            <div className='recent_job_box_btn_1'>{job.jobType}</div>
                            <div className='recent_job_box_btn_1'>{job.jobTime}</div>
                        </div>
                        <div className='recent_job_desc'>{job.description}</div>
                        <button className='recent_job_apply'>Apply</button>
                    </div>
                ))}
            </div>
            <button className='recent_jobs_learn_more'>Learn more</button>
        </div>
    )
}
