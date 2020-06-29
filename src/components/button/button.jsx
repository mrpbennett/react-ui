import React from 'react';
import './button.scss';

const styles = [
    'btn-primary-solid',
    'btn-warning-solid',
    'btn-danger-solid',
    'btn-success-solid',
    'btn-primary-outline',
    'btn-warning-outline',
    'btn-danger-outline',
    'btn-success-outline',
];

const sizes = ['btn-md', 'btn-sm'];

const radius = [
    'btn-radius-sm',
    'btn-radius-base',
    'btn-radius-md',
    'btn-radius-lg',
    'btn-radius-full',
];

const fontstyle = ['btn-upper', 'btn-lower', 'btn-capitals', 'btn-normal'];

const width = ['btn-base', 'btn-wide'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    borderRadius,
    buttonText,
    buttonWidth,
}) => {
    const checkButtonStyle = styles.includes(buttonStyle)
        ? buttonStyle
        : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    const checkBorderRadius = radius.includes(borderRadius)
        ? borderRadius
        : radius[0];

    const checkButtonText = fontstyle.includes(buttonText)
        ? buttonText
        : fontstyle[0];

    const checkButtonWidth = width.includes(buttonWidth)
        ? buttonWidth
        : width[0];

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkBorderRadius} ${checkButtonText} ${checkButtonWidth}`}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    );
};

export default Button;
