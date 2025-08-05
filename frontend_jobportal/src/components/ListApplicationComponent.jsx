import React, { useEffect, useState } from 'react';
import { listApplications } from '../services/ApplicationService'; // Import your service to list applications
import { useNavigate } from 'react-router-dom';

const ListApplicationComponent = () => {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await listApplications(); // Make sure this function fetches applications
                setApplications(response.data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        fetchApplications();
    }, []);

    function addNewApplication() {
        navigate('/add-application'); // Navigate to the page for adding new applications
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3'>List of Applications</h3>
            <button className='btn btn-primary mb-2' onClick={addNewApplication}>Add Application</button>
            <table className='table table-bordered table-hover'>
                <thead className="table-dark">
                    <tr>
                        <th>Application ID</th>
                        <th>User ID</th>
                        <th>Job ID</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Phone Number</th>
                        <th>Qualification</th>
                        <th>Experience</th>
                        <th>Skills</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applications.map(application => (
                            <tr key={application.id}>
                                <td>{application.id}</td>
                                <td>{application.user_id}</td>
                                <td>{application.jobId}</td>
                                <td>{application.gender}</td>
                                <td>{application.dob}</td>
                                <td>{application.phoneNumber}</td>
                                <td>{application.qualification}</td>
                                <td>{application.experience}</td>
                                <td>{application.skills}</td>
                                <td>{application.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListApplicationComponent;
