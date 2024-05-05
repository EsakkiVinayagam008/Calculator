import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Mainpage = () => {
    document.body.style.background='black'
    document.body.style.fontFamily =  'Unna, serif';

    const calculator={
        height:'400px',
        background:'#D1C4E9',
        width:'400px',
        display:'inline-block',
        position:'absolute',
        top:'250px',
      left:'830px'
    }
  return (
    <>
     
 
<Link to="/Calculator">
    <div style={calculator} className='hover:scale-110 transform transition-transform duration-300 rounded-lg'>
    <FontAwesomeIcon icon={faCalculator} style={{ fontSize: '36px', width: '200px', height: '200px',paddingLeft:'100px',paddingTop:'50px' }} />
    <h1 style={{textAlign:'center'}} className='text-3xl pt-5 font-bold '>CALCULATOR</h1>
    </div>
    </Link>
    </>
  )
}

export default Mainpage