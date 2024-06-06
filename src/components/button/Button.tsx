import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { SvgType } from '../icons/svgType';
import { ButtonType } from './button.type';

import { HandleClick } from '../../interfaces/global';
import _color from '../../styles/index/global/_color';
import Svg from '../icons/Svg';

export interface ButtonProps {
	svgRight?: SvgType;
	svgLeft?: SvgType;
	other_attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
	id: string;
	type: ButtonType;
	text: string | ReactNode;
	handleClick: HandleClick;
	disabled?: boolean;
	value?: string | number;
	className?: string;
}

const Button: React.FC<ButtonProps> = (params: ButtonProps) => {
	const {
		id,
		type,
		handleClick,
		text,
		value,
		disabled,
		className,
		other_attributes,
		svgLeft,
		svgRight,
	} = params;
	return (
		<button
			id={id}
			className={`button button_${type} ${className}`}
			onClick={handleClick}
			value={value}
			disabled={disabled}
			{...other_attributes}
		>
			{!!svgLeft && (
				<span className='button__svg-left'>
					{Svg({
						type: svgLeft,
						height: 16,
						width: 16,
						color: _color.font['font-brand'],
					})}
				</span>
			)}
			{!!text && (
				<span className='button__text-container'>
					<div>{text}</div>
				</span>
			)}
			{!!svgRight && (
				<span className='button__svg-right'>
					{Svg({
						type: svgRight,
						height: 16,
						width: 16,
						color: _color.font['font-brand'],
					})}
				</span>
			)}
		</button>
	);
};

export default Button;
