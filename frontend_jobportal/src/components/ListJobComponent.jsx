import React, { useEffect, useState } from 'react';
import { listJobs } from '../services/JobService';
import { useNavigate } from 'react-router-dom';

const ListJobComponent = () => {

    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        listJobs().then((response) => {
            setJobs(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    function addNewJob() {
        navigate('/add-job');
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3'>List of Jobs</h3>
            <button className='btn btn-primary mb-2' onClick={addNewJob}>Post Job</button>
            <table className='table table-bordered table-hover'>
                <thead className="table-dark">
                    <tr>
                        <th>Job ID</th>
                        <th>Job</th>
                        <th>Company</th>
                        <th>Job Type</th>
                        <th>Location</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>Vacancy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map(job =>
                            <tr key={job.jobId}>
                                <td>{job.jobId}</td>
                                <td>{job.job}</td>
                                <td>{job.company}</td>
                                <td>{job.jobType}</td>
                                <td>{job.location}</td>
                                <td>{job.experience}</td>
                                <td>{job.skills}</td>
                                <td>{job.vacancy ? 'Yes' : 'No'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListJobComponent;
