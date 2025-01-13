import { apiPublic } from '@utils';

import type { ICharactersProps } from '@interfaces';

export const getCharacters = async (): Promise<ICharactersProps> => {
	try {
		const { data } = await apiPublic.get<ICharactersProps>('/character');

		return data;
	} catch (err) {
		console.log(err);

		return {} as ICharactersProps;
	}
};
