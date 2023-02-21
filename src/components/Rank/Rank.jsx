import React from 'react';


const Rank = ({name, entries}) =>{
    return(
        <div id='input'>
            <div className='f2 light-gray'>
                <b className='f1'>{name}</b><br></br>your current entry count is ...
            </div>
            <br></br>
            <div className='white-90 f2'>
                <b>{entries}</b>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Rank;