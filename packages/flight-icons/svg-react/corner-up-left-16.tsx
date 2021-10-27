import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCornerUpLeft16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    d="M6.78 9.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5a.75.75 0 011.06 1.06L4.56 5.5h5.69a3.25 3.25 0 013.25 3.25v4.5a.75.75 0 01-1.5 0v-4.5A1.75 1.75 0 0010.25 7H4.56l2.22 2.22z"
                />
            </svg>
        );
    }
);
