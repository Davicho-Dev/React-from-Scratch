import { ICharacterProps } from '@interfaces';

interface ICharacterCardProps extends ICharacterProps {
	onChange?: () => void;
}

export type { ICharacterCardProps };
