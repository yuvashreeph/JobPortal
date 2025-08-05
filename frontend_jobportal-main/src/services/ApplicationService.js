import axios from 'axios';

const API_URL = 'http://localhost:8080/api/application';

export const listApplications = () => axios.get(API_URL);

export const createApplication = (application) => axios.post(API_URL, application)