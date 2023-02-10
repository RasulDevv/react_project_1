import React, { createContext, useState } from 'react';
import Header from '../../Uicomponents/Header'
import Group from '../../img/Group.png'
import {VscSearch} from 'react-icons/vsc'
import '../../styles/OurJobs.css'
import data from '../../data.json'
import JobItem from './JobItem';
import Categories from './Categories';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';


const AlertContext = createContext()

const OurJobs = () => {
    const [jobType, setJobType] = useState('all')
    const [postedDate, setPostedDate] = useState('all')
    const [exprienceLevel, setExprienceLevel] = useState('all')
    const [categories, setCategories] = useState('all')
    const [sortingAlert, seSortingAlert] = useState(true)

    const [titleValue, setTitleValue] = useState('')
    const [locationValue, setLocationValue] = useState('')
    const [salaryValue, setSalaryValue] = useState('')
    

    const onChangeCategories = (e) => {
        setCategories(e.target.value)
    }

    const onChangeType = (e) => {
        setJobType(e.target.value)
    }

    const onChangePostedDate = (e) => {
        setPostedDate(e.target.value)
    }

    const onChangeExprienceLevel = (e) => {
        setExprienceLevel(e.target.value)
    }

    const handleSubmitForSearching = e => {
        e.preventDefault()
        setTitleValue('')
        setLocationValue('')
        setSalaryValue('')
    }

    const handleClickSorting = () => seSortingAlert(p => !p)
    
    
    return (
        <div>
            <Header orqaFonOpshiyHeader='orqaFonOpshiyHeaderOurJobs' dNone='d-none md-d-none' p='Get the most exciting part time jobs from the best cities of Europe and UAE.' h1='Our Jobs' />
            <div className='m-auto bg-white pt-10'>
            <button onClick={handleClickSorting} className={`sortingToggleBtn slightlyBlueButton md-d-block ${sortingAlert ? 'sortingToggleBtnOfsortingAlert' : ''}`}>{sortingAlert ? 'sorting' : 'back'}</button>
                <div className='w-87 m-auto'>
                    <form onSubmit={handleSubmitForSearching} className='d-grid columnsOfOurJobs col-md-1 col-sm-1'>
                        <input onChange={(e) => setTitleValue(e.target.value)} value={titleValue} className='outline-none br-10 b-black p-10' type='text' placeholder='Job Title, Keyword, Company' />
                        <input onChange={(e) => setLocationValue(e.target.value)} value={locationValue} className='outline-none br-10 b-black p-10' type='text' placeholder='Location' />
                        <input onChange={(e) => setSalaryValue(e.target.value)} value={salaryValue} className='outline-none br-10 b-black p-10' type='number' placeholder='Salary' />
                        <button type='submit' className='slightlyBlueButton d-none'><VscSearch/> Search</button>
                    </form>
                </div>

                
                <div className={`d-grid columns-2-1-3 w-87 m-auto mt-10 pb-10 md-gridTemplate-column ${sortingAlert ? 'columns-1' : null}`}>
                    <AlertContext.Provider value={sortingAlert}>
                    {sortingAlert ? null : (
                        <div className='d-flex direction-column border bg-whiteSmoke p-5 br-radius-10 h-100 h-100vhSorting md-sortingAlert'>

                        <Categories onChange={onChangeCategories} value9='other' value8='cleaning' value7='babySitting' value6='sportCoaches' value5='realEstate' value4='tradeCenters' value3='beautySalons' value2='restaurants' value1='hotel' categories={categories} name='categories'/>

                        <div onChange={onChangeType} className='d-flex direction-column border-top mt-5'>
                            <h2>Job Types</h2>
                            <div className='px-10'>
                                <input checked={jobType === 'all'} value='all' name='jobType' type='radio' id='in1' />
                                <label htmlFor="in1">All</label>
                            </div>

                            <div className='px-10'>
                                <input checked={jobType === 'internShip'} value='internShip' name='jobType' type="radio" id='in2' />
                                <label htmlFor='in2'>Internship</label>
                            </div>

                            <div className='px-10'>
                                <input checked={jobType === 'partTime'} value='partTime' name='jobType' type="radio" id='in3' />
                                <label htmlFor='in3'>Part-Time</label>
                            </div>

                            <div className='px-10'>
                                <input checked={jobType === 'urgent'} value='urgent' name='jobType' type="radio" id='in4' />
                                <label htmlFor='in4'>Urgent</label>
                            </div>
                            
                        </div>

                        <div onChange={onChangePostedDate} className='border-top mt-5'>
                            <h2>Posted Date</h2>

                            <div className='px-10'>
                                <input checked={postedDate === 'all'} value='all' name='postedDate' type="radio" id='in5' />
                                <label htmlFor='in5'>All</label>
                            </div>

                            <div className='px-10'>
                                <input checked={postedDate === 'lastHour'} value='lastHour' name='postedDate' type="radio" id='in6' />
                                <label htmlFor='in6'>Last Hour</label>
                            </div>

                            <div className='px-10'>
                                <input checked={postedDate === 'last24Hours'} value='last24Hours' name='postedDate' type="radio" id='in7' />
                                <label htmlFor='in7'>Last 24 Hours</label>
                            </div>

                            <div className='px-10'>
                                <input checked={postedDate === 'lastWeek'} value='lastWeek' name='postedDate' type="radio" id='in8' />
                                <label htmlFor='in8'>Last Week</label>
                            </div>

                            <div className='px-10'>
                                <input checked={postedDate === 'lastMonth'} value='lastMonth' name='postedDate' type="radio" id='in9' />
                                <label htmlFor='in9'>Last Month</label>
                            </div>

                        </div>

                        <div onChange={onChangeExprienceLevel} className='border-top mt-5'>
                            <h2>Exprience Level</h2>

                            <div className='px-10'>
                                <input checked={exprienceLevel === 'all'} value='all' name='exprienceLevel' type="radio" id='in10' />
                                <label htmlFor='in10'>All</label>
                            </div>

                            <div className='px-10'>
                                <input checked={exprienceLevel === 'noExprience'} value='noExprience' name='exprienceLevel' type="radio" id='in11' />
                                <label htmlFor='in11'>No Exprience</label>
                            </div>

                            <div className='px-10'>
                                <input checked={exprienceLevel === '1YearsExp'} value='1YearsExp' name='exprienceLevel' type="radio" id='in12' />
                                <label htmlFor='in12'>1 Years Exprience</label>
                            </div>

                            <div className='px-10'>
                                <input checked={exprienceLevel === '2YearsExp'} value='2YearsExp' name='exprienceLevel' type="radio" id='in13' />
                                <label htmlFor='in13'>2 Years Exprience</label>
                            </div>

                            <div className='px-10'>
                                <input checked={exprienceLevel === '3YearsExp'} value='3YearsExp' name='exprienceLevel' type="radio" id='in14' />
                                <label htmlFor='in14'>3 Years Exprience</label>
                            </div>

                            <div className='px-10'>
                                <input checked={exprienceLevel === 'more'} value='more' name='exprienceLevel' type="radio" id='in15' />
                                <label htmlFor='in15'>More</label>
                            </div>

                        </div>
                    </div>
                    )}
                    </AlertContext.Provider>
                    
                    

                    {/* jobs */}
                    <div>
                        {data.jobs.filter(item => {
                            if(titleValue === '') return item
                            else if(item.category.toLowerCase().includes(titleValue.toLowerCase())) return item
                        }).filter(item => {
                            if(locationValue === '') return item
                            else if(item.address.toLowerCase().includes(locationValue.toLowerCase())) return item
                        }).filter(item => {
                            if(salaryValue === '') return item
                            else if(item.salary.includes(salaryValue)) return item
                        }).filter(item => {
                            const qwerty = item.category !== "Hotel" && item.category !== "Restaurant" && item.category !== "Beauty Salon" && item.category !== "Trade Center" && item.category !== "Real Estate" && item.category !== "Sport Coaches" && item.category !== "Baby Sitting" && item.category !== "Cleaning"
                            switch(categories){
                                case 'hotel':
                                    return item.category === "Hotel"
                                case 'restaurants':
                                    return item.category === "Restaurant"
                                case 'beautySalons':
                                    return item.category === "Beauty Salon"
                                case 'tradeCenters':
                                    return item.category === "Trade Center"
                                case 'realEstate':
                                    return item.category === "Real Estate"
                                case 'sportCoaches':
                                    return item.category === "Sport Coaches"
                                case 'babySitting':
                                    return item.category === "Baby Sitting"
                                case 'cleaning':
                                    return item.category === "Cleaning"
                                case 'other':
                                    return qwerty ? item : qwerty

                                default: return item
                            }
                        }).filter(item => {
                            switch(jobType){
                                case 'partTime':
                                    return item.jobType === "Part-time"
                                case 'urgent':
                                    return item.jobType === "Urgent"
                                case 'internShip':
                                    return item.jobType === "Internship"
                                
                                default: return item
                            }
                        }).map((item,index) => {
                            return <JobItem setSortingAlert={seSortingAlert} companyWants={item.companyWants} address={item.address} category={item.category} jobType={item.jobType} salary={item.salary} key={index} />
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJobs;