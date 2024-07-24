import React from 'react';
import '../Title/Title.css'

function Title({ subTitle, title }) {
  return (
    <>
      <div className="main_container">
        <div className="title">
          <p className='mb-0'>{subTitle}</p>
          <h2 className='brand_color'>{title}</h2>
        </div>
      </div>

    </>
  )
}

export default Title
