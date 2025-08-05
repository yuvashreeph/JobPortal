import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById, getApplicationByJobId, getUserById } from '../services/JobService';

const ViewScoreComponent = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [applications, setApplications] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await getJobById(jobId);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job:", error);
            }
        };

        const fetchApplications = async () => {
            try {
                const response = await getApplicationByJobId(jobId);
                setApplications(response.data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const userFetchPromises = applications.map(app => getUserById(app.user_id));
                const response = await Promise.all(userFetchPromises);
                const usersData = response.reduce((acc, user) => {
                    acc[user.data.id] = user.data;
                    return acc;
                }, {});
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchJob();
        fetchApplications().then(fetchUsers);
    }, [jobId, applications]);

    if (!job) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2 className='text-center mb-4'>View scores for {job.job}</h2>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Candidate Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(app => (
                        <tr key={app.id}>
                            <td>{users[app.user_id]?.name || 'Loading...'}</td>
                            <td>{users[app.user_id]?.email || 'Loading...'}</td>
                            <td>{app.phoneNumber}</td>
                            <td>{app.score}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewScoreComponent;
