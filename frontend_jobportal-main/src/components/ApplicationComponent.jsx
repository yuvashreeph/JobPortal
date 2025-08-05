import React, { useState } from 'react';
import { createApplication } from '../services/ApplicationService';
import { useNavigate } from 'react-router-dom';

const ApplicationComponent = () => {
    const [user_id, setUserId] = useState('');
    const [jobId, setJobId] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [qualification, setQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const saveApplication = async (e) => {
        e.preventDefault();
        const applicationData = { user_id, jobId, gender, dob, phoneNumber, qualification, experience, skills };

        try {
            const response = await createApplication(applicationData);
            console.log(response.data);
            navigate('/applications');
        } catch (err) {
            console.error(err);
            setError('Failed to submit application. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='card col-md-8 offset-md-2 my-5'>
                <div className='card-body'>
                    <h3 className="card-title text-center">Add application</h3>
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
                            <label className='form-label'>Job ID</label>
                            <input
                                type='text'
                                placeholder='Enter Job ID'
                                name='jobId'
                                value={jobId}
                                className='form-control'
                                onChange={(e) => setJobId(e.target.value)}
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

                        <button className='btn btn-success' onClick={saveApplication}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ApplicationComponent;
