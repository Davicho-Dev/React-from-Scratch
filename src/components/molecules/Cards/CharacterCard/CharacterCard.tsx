import { useState } from 'react';

import type { FC } from 'react';

import type { ICharacterCardProps } from './CharacterCard.interfaces';

export const CharacterCard: FC<ICharacterCardProps> = ({ name, species, gender, image }) => {
	const [showImage, setShowImage] = useState<boolean>(false);

	const toggleImg = () => setShowImage(!showImage);

	return (
		<div
			className='w-full p-4 flex gap-x-4 bg-sky-100 hover:bg-sky-300 rounded-xl shadow-md hover:shadow-sm transition-all ease-in-out duration-500'
			onClick={toggleImg}
		>
			{showImage && <img src={image} className='w-fit h-28 rounded-lg aspect-square' />}
			<div className='grid'>
				<span>
					<strong>Name:</strong> {name}
				</span>
				<span>
					<strong>Gender:</strong> {gender}
				</span>
				<span>
					<strong>Species:</strong> {species}
				</span>
			</div>
		</div>
	);
};
