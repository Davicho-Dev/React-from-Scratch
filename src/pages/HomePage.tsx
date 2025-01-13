import { useEffect, useState } from 'react';

import { v4 } from 'uuid';

import { CharacterCard } from '@molecules';
import { getCharacters } from '@services';

import type { ICharactersProps } from '@interfaces';

const HomePage = () => {
	const [characters, setCharacters] = useState<ICharactersProps>();

	useEffect(() => {
		getCharacters().then(setCharacters);
	}, []);

	return (
		<div className='p-4 grid grid-cols-3 gap-6'>
			{characters?.results.map(props => <CharacterCard key={v4()} {...props} />)}
		</div>
	);
};

export default HomePage;
