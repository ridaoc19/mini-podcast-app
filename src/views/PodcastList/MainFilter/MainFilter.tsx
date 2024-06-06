import { ChangeEvent } from 'react';

interface MainFilterProps {
	podcastTotal: number;
	value: string;
	handleOnChange: (data: ChangeEvent<HTMLInputElement>) => void;
}

function MainFilter({ podcastTotal, value, handleOnChange }: MainFilterProps) {
	return (
		<div className='main-filter'>
			<div className='main-filter__count'>
				<h3>{podcastTotal}</h3>
			</div>
			<div className='main-filter__input'>
				<input
					type='text'
					placeholder='Filter podcasts...'
					value={value}
					onChange={handleOnChange}
					className='podcast-list__filter'
				/>
			</div>
		</div>
	);
}

export default MainFilter;
