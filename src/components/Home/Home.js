import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Header from '../Header/Header';

const Home = () => {
    const quizTopic =useLoaderData()
    
    
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="card grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mr-14 ml-14 mt-20 mb-20">
                {
                   quizTopic.data.map(quiz=><Card key={quiz.id} quiz={quiz}></Card>) 
                }
            </div>
        </div>
    );
};

export default Home;