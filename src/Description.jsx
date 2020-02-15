import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './Description.css'

const Description = ({match, jobs}) => {
    const selectedJob = jobs.find(job => job.id === match.params.id)
    return (
        <div className='Description' >
            {ReactHtmlParser(selectedJob.description)}
            {ReactHtmlParser(selectedJob.how_to_apply)}
        </div>
    );
}

export default Description;