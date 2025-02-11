import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box' >
        <p className='font-medium sm:text-xl text-center' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} alt="" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5' >
            Hello! I am <span className='font-semibold' >Aditya</span>
            <br />
            Pre-Final Year Computer Science student
        </h1>
    ),
    2: (
        <InfoBox 
            text="my projects are so cool just take a look"
            link='/projects'
            btnText="explore projects"
        />
    ),
    3: (
        <InfoBox 
            text="my portfolio are so cool just take a look"
            link='/about'
            btnText="My portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="my education are so cool just take a look"
            link='/contact'
            btnText="resume or contacts"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
