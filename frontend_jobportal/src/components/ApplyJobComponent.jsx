import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobById } from '../services/JobService';
import { createApplication } from '../services/ApplicationService';

const ApplyJobComponent = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [user_id, setUserId] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [error, setError] = useState('');

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

    const saveApplication = async (e) => {
        e.preventDefault();
        const applicationData = { user_id, jobId: jobId, gender, dob, phoneNumber, qualification, experience, skills };

        try {
            const response = await createApplication(applicationData);
            console.log(response.data);
            alert(`Application submitted for the position of "${job.job}"`);
            navigate('/search');
        } catch (err) {
            console.error(err);
            setError('Failed to submit application. Please try again.');
        }
    };

    if (!job) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2>Apply for the position of "{job.job}"</h2>
            <div className='card col-md-8 offset-md-2 my-5'>
                <div className='card-body'>
                    <h3 className="card-title text-center">Apply for Job</h3>
                    <form>
                        <div className='form-group mb-3'>
                            <label className='form-label'>User ID</label>
                            <input
                                type='text'
                                placeholder='Enter User ID'
                                name='user_id'
                                value={user_id}
                                className='form-control'
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Gender</label>
                            <input
                                type='text'
                                placeholder='Enter Gender'
                                name='gender'
                                value={gender}
                                className='form-control'
                                onChange={(e) => setGender(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Date of Birth</label>
                            <input
                                type='date'
                                name='dob'
                                value={dob}
                                className='form-control'
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Phone Number</label>
                            <input
                                type='text'
                                placeholder='Enter Phone Number'
                                name='phoneNumber'
                                value={phoneNumber}
                                className='form-control'
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Qualification</label>
                            <input
                                type='text'
                                placeholder='Enter Qualification'
                                name='qualification'
                                value={qualification}
                                className='form-control'
                                onChange={(e) => setQualification(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Experience</label>
                            <input
                                type='text'
                                placeholder='Enter Experience'
                                name='experience'
                                value={experience}
                                className='form-control'
                                onChange={(e) => setExperience(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Skills</label>
                            <input
                                type='text'
                                placeholder='Enter Skills (comma separated)'
                                name='skills'
                                value={skills}
                                className='form-control'
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>

                        {error && <div className='alert alert-danger'>{error}</div>}

                        <button className='btn btn-success' onClick={saveApplication}>Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJobComponent;
