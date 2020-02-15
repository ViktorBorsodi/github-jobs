import React from 'react';
import './Job.css'
import {withRouter} from 'react-router-dom'

const Job = ({job, history}) => {
    return (
        <div className='job' onClick={() => {history.push(`/jobs/${job.id}`)}} >
            <a href={job.company_url} ><h2>{job.company}</h2></a>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
        </div>
    );
}

export default withRouter(Job);