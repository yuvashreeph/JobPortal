import axios from "axios";

const REST_API_JOB_URL = 'http://localhost:8080/api/jobs'
const REST_API_APPL_URL = 'http://localhost:8080/api/application/job'

export const listJobs = () => axios.get(REST_API_JOB_URL);

export const createJob = (jobData) => axios.post(REST_API_JOB_URL, jobData)

export const getJobById = (jobId) => axios.get(`${REST_API_JOB_URL}/${jobId}`);

export const getApplicationByJobId = (jobId) => axios.get(`${REST_API_APPL_URL}/${jobId}`);

export const getUserById = (user_id) => axios.get(`http://localhost:8080/api/user/id/${user_id}`); 