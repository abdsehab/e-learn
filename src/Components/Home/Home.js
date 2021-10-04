import React from 'react';
import Aboutus from '../About US/Aboutus';
import HomeCover from '../Home Cover/HomeCover';
import Hshort from '../Home Short Course/Hshort';

// All Homepage Here
const Home = () => {
    return (
        <div>
            <HomeCover></HomeCover>
            <Hshort></Hshort>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;