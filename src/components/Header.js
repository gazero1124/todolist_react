import React from 'react';

const Header = () => {
  console.log('Header 업데이트!!!');
  return (
    <div className='Header'>
      <h3>오늘은 📆</h3>
      <p>{new Date().toDateString()}</p>
    </div>
  )
}

export default React.memo(Header);