import React from 'react';
import Header from '../../Uicomponents/Header';
import womanAboutUs from '../../img/womanAboutUs.png'
import TheySays from '../home/TheySays'
import boy3 from '../../img/boy3.jpg'
import testimonials from '../../img/testimonials.png'

const Testimonials = () => {
    return (
        <div>
            <img className='womanAboutUsPng' src={womanAboutUs} alt='png' />
            <Header orqaFonOpshiyHeader2='orqaFonOpshiyHeader2' orqaFonOpshiyHeader='orqaFonOpshiyHeaderAboutUs'  h1='Testimonials' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' dNone='d-none md-d-none' />
        
            <div className='bg-white'>
                <h1 className='text-center py-10'>People We Helped To Find Their Best Job</h1>
                <div className='d-grid columns-3 w-87 m-auto p-0 md-gridTemplate-column'>
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                    <TheySays imgSrc={boy3} lorem='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but' personName='Wade Warren' personJob='UI Designer, Adobe' />
                </div>

                <div className='d-flex justifyContent-space-between m-10 md-flexDirection-column'>
                    <div className='bg-coral d-flex justifyContent-center'>
                        <div className='w-80 m-auto'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum at voluptatibus veniam, cumque necessitatibus natus, quam corrupti expedita in itaque molestias, velit eius fugiat sint repellendus praesentium tempora eos sit obcaecati similique exercitationem perspiciatis hic incidunt aperiam! Sequi, perspiciatis libero fugit modi odit natus quos excepturi eaque accusantium quod ipsum perferendis, enim eius in magnam.</p>
                            <p>------ Elithabeth Doe</p>
                        </div>
                    </div>
                    <div className=''><img className='w-50 md-w-100' src={testimonials} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;