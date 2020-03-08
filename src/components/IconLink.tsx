import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import iconStyles from './iconLink.module.scss';

export interface ButtonProps {
	url: string;
	text?: string;
	icon?: IconProp;
}
const IconLink = ({ url, text, icon = [] }: ButtonProps) => (
	<a href={url} target="_blank" rel="noopener noreferrer" aria-label={text}>
		{<FontAwesomeIcon icon={icon} className={iconStyles.icon} aria-label={text} /> || { text }}
	</a>
);

export default IconLink;
