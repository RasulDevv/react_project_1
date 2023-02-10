import React from 'react';
import '../../styles/Home.css'
import Header from '../../Uicomponents/Header';
import boy3 from '../../img/boy3.jpg'

import ExploreNow from '../../Uicomponents/ExploreNow';
import Logos from '../../Uicomponents/Logos';
import JobsCategory from './JobsCategory';
import CardOfJob from './CardOfJob';
import OurWokingProcess from '../../Uicomponents/OurWokingProcess';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import TheySays from './TheySays';

const Home = () => {
    return (
        <div className='m-auto Home'>
            <Header orqaFonOpshiyHeader='h-Human' height='h-Home' p='Get the most exciting part time jobs from the best cities of Europe and UAE.' h1='Find Exciting Jobs Today.' />
            
            <div style={{background: 'white'}}>
                <Logos/>

                <div className='bg-white w-100 m-auto'>
                    <div className='d-flex justifyContent-space-beetwen w-87 m-auto md-flexDirection-column'>
                        <p className='h3 md-h3'>Explore Jobs by Category</p>
                        <p className='ppppppppppp md-ppppppppppp'>Get the most exciting jobs from the best cities of Europe and UAE and grow your career fast with others.</p>
                    </div>

                    <div className='d-grid columns-4 w-87 m-auto col-md-1 col-sm-2'>
                        <JobsCategory jobsNumber='2' jobName='Hotel' rang='red' />
                        <JobsCategory jobsNumber='12' jobName='Restaurants' rang='blue' />
                        <JobsCategory jobsNumber='32' jobName='Beauty Salons' rang='coral' />
                        <JobsCategory jobsNumber='25' jobName='Trade Centers' rang='blue' />
                        <JobsCategory jobsNumber='28' jobName='Real Estate' rang='indigo' />
                        <JobsCategory jobsNumber='20' jobName='Sports Coaches' rang='grey' />
                        <JobsCategory jobsNumber='2' jobName='BabySitting' rang='indigo' />
                        <JobsCategory jobsNumber='2' jobName='Cleaning' rang='red' />
                    </div>

                    <div className='bg-ganga w-100'>
                        <div className='mt-10 d-flex justifyContent-space-beetwen h-10 w-87 m-auto md-flexDirection-column md-h-10'>
                            <div>
                                <p className='ourFeaturedJobs'>Our Featured Jobs</p>
                                <p>Check our featured jobs from popular companies. Start applying now.</p>
                            </div>
                            <button className='btnPink'>View All Jobs</button>
                        </div>

                        <div className='d-grid columns-3 col-md-1 w-87 m-auto pb-10 col-sm-2'>
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                        </div>
                    </div>

                    <div>
                        <div className='mt-10 d-flex justifyContent-space-beetwen h-10 w-87 m-auto md-flexDirection-column'>
                                <div>
                                    <p className='ourFeaturedJobs'>Our Urgent Jobs</p>
                                    <p>Check our featured jobs from popular companies. Start applying now.</p>
                                </div>
                                <button className='btnPink'>View All Jobs</button>
                        </div>
                        <div className='d-grid columns-3 col-md-1 w-87 m-auto col-sm-2'>
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                            <CardOfJob address='Paris, France' jobName='Professional Hairddresser' byWhom='Chorocon Salon' />
                        </div>
                    </div>
                </div>
                <div className='w-87 m-auto d-flex'>
                    <OurWokingProcess/>
                </div>

                <div className='d-flex w-87 m-auto justifyContent-space-beetwen'>
                    <p className='h2 md-h2'>What They Says About Our Services</p>
                    <div>
                        <button className='btnCoral-outline'><AiOutlineLeft/></button>
                        <button className='btnCoral-outline'><AiOutlineRight/></button>
                    </div>
                </div>

                <div className='d-grid columns-3 col-md-1 w-87 m-auto col-sm-2'>
                    <TheySays mb='mb-7rem md-mb-1' imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays mb='mb-7rem md-mb-1' imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays mb='mb-7rem md-mb-1' imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                </div>
            </div>

        </div>
    );
};

export default Home;