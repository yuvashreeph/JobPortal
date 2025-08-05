import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../services/JobService';

const ViewJobComponent = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await getJobById(jobId);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job:", error);
            }
        };

        fetchJob();
    }, [jobId]);

    if (!job) return <div>Loading...</div>;

    const handleApplyClick = () => {
        navigate(`/apply-job/${jobId}`);
    };

    return (
        <div className="container mt-4 d-flex justify-content-center">
            <div className="card w-75 m-2" style={{ padding: '20px' }}>
                <h2 className='text-center' style={{ marginBottom: '20px' }}>{job.job}</h2>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Job Type:</strong> {job.jobType}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Skills:</strong> {job.skills}</p>
                <p><strong>Vacancy:</strong> {job.vacancy ? "Available" : "Not Available"}</p>
                <button className="btn btn-primary mt-3" onClick={handleApplyClick}>
                    Apply
                </button>
            </div>
        </div>
    );
};

export default ViewJobComponent;
