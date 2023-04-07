import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const t_shirts = useLoaderData();
    console.log(t_shirts)
    return (
        <div>
           
            <h1>This is HOme Page</h1>
        </div>
    );
};

export default Home;