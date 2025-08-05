import React, { useState, useEffect } from 'react';
import { listJobs } from '../services/JobService';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
    const [jobs, setJobs] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await listJobs();
                setJobs(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        getJobs();
    }, []);

    const handleViewJob = (jobId) => navigator(`/view-job/${jobId}`);
    const handleApplyJob = (jobId) => navigator(`/apply-job/${jobId}`);

    return (
        <div>
            <h2 className='text-center' style={{ marginTop: '25px' }}>Search Jobs</h2>
            <div className="d-flex justify-content-center flex-wrap">
                {jobs.map((job) => (
                    <div className="card w-75 m-2" key={job.jobId}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://i.ibb.co/71hng9G/download.png"
                                    alt="Job"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{job.job}</h5>
                                    <p>Company: {job.company}</p>
                                    <p>Job Type: {job.jobType}</p>
                                    <p>Location: {job.location}</p>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn btn-primary me-2" onClick={() => handleViewJob(job.jobId)}>View Job</button>
                                        <button className="btn btn-success" onClick={() => handleApplyJob(job.jobId)}>Apply Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchComponent;
