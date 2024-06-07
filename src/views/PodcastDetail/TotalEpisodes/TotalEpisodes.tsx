function TotalEpisodes({ totalEpisodes }: { totalEpisodes: number }) {
	return (
		<div className='total-episodes'>
			<div
				className='total-episodes__title'
				data-testid='total-episodes__title'
			>
				<h2>Episodes: {totalEpisodes}</h2>
			</div>
		</div>
	);
}

export default TotalEpisodes;
