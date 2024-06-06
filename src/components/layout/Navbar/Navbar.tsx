import { useContext } from 'react';
import { CreateContext } from '../../../hooks/useContext';
import Svg from '../../icons/Svg';
import { SvgType } from '../../icons/svgType';
import { Link } from 'react-router-dom';

function Navbar() {
  const {
    podcastState: { isLoading, isError },
  } = useContext(CreateContext);

  const getStatusClass = () => {
    if (isLoading) return 'loading';
    if (isError) return 'error';
    return 'normal';
  };

  return (
    <div className='navbar'>
      <Link className='navbar__logo' to={'/'}>
        <Svg type={SvgType.Logo} />
        <h2>Podcasts</h2>
      </Link>
      <div className='navbar__loader'>
        <div className={`circles ${getStatusClass()}`}>
          <div className='circle circle-1'></div>
          <div className='circle circle-2'></div>
          <div className='circle circle-3'></div>
          <div className='circle circle-4'></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
