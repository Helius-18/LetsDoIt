import React, { useContext } from 'react';
import loadingGif from '../../assets/loading.gif';
import { AppContext } from '../../AppContext';

const Loader = () => {
  const { loading } = useContext(AppContext);

  return (
    loading ? (<img className='position-absolute top-0 start-50 translate-middle' src={loadingGif} alt="Loading..." style={{ objectFit: 'contain', mixBlendMode: 'color-burn', width: '20vh', marginTop: '5vh' }}/>) : (<></>)
  );
};

export default Loader;