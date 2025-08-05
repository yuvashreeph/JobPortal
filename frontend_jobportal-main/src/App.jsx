import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import UserComponent from './components/UserComponent';
import HomeComponent from './components/HomeComponent';
import AdminHomeComponent from './components/AdminHomeComponent';
import RecruitHomeComponent from './components/RecruitHomeComponent';
import AboutComponent from './components/AboutComponent';
import SearchComponent from './components/SearchComponent';
import ContactComponent from './components/ContactComponent';
import SigninComponent from './components/SigninComponent';
import SignupComponent from './components/SignupComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ListJobComponent from './components/ListJobComponent';
import JobComponent from './components/JobComponent';
import ViewJobComponent from './components/ViewJobComponent';
import ApplyJobComponent from './components/ApplyJobComponent';
import ListApplicationComponent from './components/ListApplicationComponent';
import ApplicationComponent from './components/ApplicationComponent';
import RecruitSearchComponent from './components/RecruitSearchComponent';
import ViewScoreComponent from './components/ViewScoreComponent';

const App = () => {
  const location = useLocation();
  // hide header on welcome, signin, and signup pages
  const showHeader = !['/', '/signin', '/signup'].includes(location.pathname);

  return (
    <>
      {showHeader && <HeaderComponent />}
      <Routes>
        <Route path='/' element={<WelcomeComponent />} />
        <Route path='/admin-home' element={<AdminHomeComponent />} />
        <Route path='/recruit-home' element={<RecruitHomeComponent />} />
        <Route path='/recruit-search' element={<RecruitSearchComponent />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/search' element={<SearchComponent />} />
        <Route path='/contact' element={<ContactComponent />} />
        <Route path='/users' element={<ListUserComponent />} />
        <Route path='/jobs' element={<ListJobComponent />} />
        <Route path='/applications' element={<ListApplicationComponent />} />
        <Route path='/add-user' element={<UserComponent />} />
        <Route path='/add-application' element={<ApplicationComponent />} />
        <Route path='/add-job' element={<JobComponent />} />
        <Route path='/signin' element={<SigninComponent />} />
        <Route path='/signup' element={<SignupComponent />} />
        <Route path="/view-job/:jobId" element={<ViewJobComponent />} />
        <Route path="/apply-job/:jobId" element={<ApplyJobComponent />} />
        <Route path="/view-score/:jobId" element={<ViewScoreComponent />} />
      </Routes>
    </>
  );
};

// for optional navbar display (Welcome page)
const MainApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default MainApp;
