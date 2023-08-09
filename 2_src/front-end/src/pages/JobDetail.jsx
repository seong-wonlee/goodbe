import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import JobHeader from '../components/JobDetail/JobHeader';
import JobDetailContent from '../components/JobDetail/JobDetailContent';
import EduRecommendRelated from '../components/JobDetail/EduRecommendRelatedJob';



const JobDetail = () => {
    return (
        <div>
            <Navbar/>
            <JobHeader/>
            <JobDetailContent/>
            <EduRecommendRelated/>
            <Footer/>
        </div>
    );
};

export default JobDetail;