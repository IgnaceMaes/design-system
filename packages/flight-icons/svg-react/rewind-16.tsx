import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconRewind16 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M7.074 3.364A1.25 1.25 0 019 4.416v1.806l4.039-2.795A1.25 1.25 0 0115 4.454v7.092a1.25 1.25 0 01-1.961 1.027L9 9.778v1.806a1.25 1.25 0 01-1.926 1.051L1.499 9.051a1.25 1.25 0 010-2.103l5.575-3.584zM2.637 8L7.5 11.126V4.874L2.637 8zm6.43 0l4.433 3.069V4.93L9.068 8z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
