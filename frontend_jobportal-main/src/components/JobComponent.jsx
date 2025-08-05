import React, { useState } from 'react'
import { createJob } from '../services/JobService'
import { useNavigate } from 'react-router-dom'

const JobComponent = () => {
    const [job, setJob] = useState('')
    const [company, setCompany] = useState('')
    const [jobType, setJobType] = useState('')
    const [location, setLocation] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')
    const [vacancy, setVacancy] = useState(true) // setting default as true

    const navigator = useNavigate();

    const saveJob = async (e) => {
        e.preventDefault();
        const jobData = { job, company, jobType, location, experience, skills, vacancy };

        try {
            const response = await createJob(jobData);
            console.log(response.data);
            navigator('/jobs');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='container'>
            <div className='card col-md-8 offset-md-2 my-5'>
                <div className='card-body'>
                    <h3 className="card-title text-center">Add New Job</h3>
                    <form>
                        <div className='form-group mb-3'>
                            <label className='form-label'>Job</label>
                            <input
                                type='text'
                                placeholder='Enter job title'
                                name='job'
                                value={job}
                                className='form-control'
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Company</label>
                            <input
                                type='text'
                                placeholder='Enter company name'
                                name='company'
                                value={company}
                                className='form-control'
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Job Type</label>
                            <input
                                type='text'
                                placeholder='Enter job type'
                                name='jobType'
                                value={jobType}
                                className='form-control'
                                onChange={(e) => setJobType(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Location</label>
                            <input
                                type='text'
                                placeholder='Enter location'
                                name='location'
                                value={location}
                                className='form-control'
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Experience (in years)</label>
                            <input
                                type='number'
                                placeholder='Enter experience required'
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
                                placeholder='Enter required skills'
                                name='skills'
                                value={skills}
                                className='form-control'
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Vacancy</label>
                            <select
                                className='form-control'
                                value={vacancy}
                                onChange={(e) => setVacancy(e.target.value === 'true')}>
                                <option value='false'>No</option>
                                <option value='true'>Yes</option>
                            </select>
                        </div>

                        <button className='btn btn-success' onClick={saveJob}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobComponent;
