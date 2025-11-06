import React from 'react';
import RecentProducts from '../RecentProducts/RecentProducts';

const recentProductsPomise = fetch('http://localhost:3000/recent-products')
.then(res => res.json())
const Home = () => {
    return (
        <div>
            <h3 className='bg-primary'>This is Home</h3>
            <RecentProducts recentProductsPomise={recentProductsPomise}></RecentProducts>
        </div>
    );
};

export default Home;