import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar'>
			<Link className='navbar__logo' to={'/'}>
				<h2>Podcasts</h2>
			</Link>
			<div className='navbar__loader'>
				<div className={`circles loading`}>
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
