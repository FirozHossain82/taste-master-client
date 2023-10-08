import  { useEffect } from 'react';

const useTittle = (title) => {
  useEffect(() =>{
    document.title = `Taste-Master ${title}`;
    window.scrollTo(0,0);
  },[title])
};

export default useTittle;