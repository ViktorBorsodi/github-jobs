import React from 'react';
import Job from './Job'
import './Jobs.css'

const Jobs = ({jobs}) => {
    const jobDisplay = jobs.map(job => <Job key={job.id} job={job} />)

    return (
        <div className='jobs' >
            {jobDisplay}
        </div>
    );
}

export default Jobs;