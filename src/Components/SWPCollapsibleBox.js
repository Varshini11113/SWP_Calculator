import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function CollapsibleBox({ heading, content = "", isFormula = false, isLast = false , isSidePanel = false}) {

  let weight = 500;
  if (!isSidePanel){
    weight = 600;
  }

  const style = {
    cursor: 'pointer',
    fontWeight: weight,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0.5rem 0.5rem 10px 0',
  }

  let contentStyle = (isSidePanel)? 'font-normal mb-[20px] text-justify': 'font-normal mb-[20px] mr-[22px] text-justify';

  return (
    <>

    <Collapsible
        trigger={[<div key={''} className='pr-[15px]'>{heading}</div>, <HiOutlineChevronDown key={'downIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px', marginRight: "-10px"}} />]}
        triggerWhenOpen={[<div key={''}className='pr-[15px]'>{heading}</div>, <HiOutlineChevronUp key={'upIcon'} style={{ flexShrink: 0, color: '#005CFF', width: '18px', height: '18px', marginRight: "-10px" }} />]}
        triggerStyle={style}

      >
        {!isFormula? <div className={contentStyle}>{content}</div> : 
        <div className='mb-[20px] mr-[22px]'>
          <div>It uses the following logic</div> <div className='font-semibold my-[10px]'>A = WA ((1+r/n)^nt – 1) / (r/n) <br/> Where,                  A = Final value of investment <br/>  WA = Amount withdrawn every period <br/> n = number of compounds in a period <br/> r = expected annual rate of return <br/> t = total number of period for which the money is invested</div>
        </div> }
      </Collapsible >

      {/* line */}
      {isLast ? <div className='mb-1'></div> : <div style={isSidePanel? { width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 0.6, marginBottom: '10px' } :{ width: 100 + '%', height: '0px', border: '0.5px solid #C4C4C4', opacity: 0.6, marginBottom: '20px', }}></div>}
      
      
    </>
  );
}