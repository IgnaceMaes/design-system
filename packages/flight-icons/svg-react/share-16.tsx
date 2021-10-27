import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShare16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M5.3 5.76a.75.75 0 01-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V3.66L5.3 5.76z" />
                    <path d="M2 9.25A2.25 2.25 0 014.25 7H5a.75.75 0 010 1.5h-.75a.75.75 0 00-.75.75v3.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-3.5a.75.75 0 00-.75-.75H11A.75.75 0 0111 7h.75A2.25 2.25 0 0114 9.25v3.5A2.25 2.25 0 0111.75 15h-7.5A2.25 2.25 0 012 12.75v-3.5z" />
                </g>
            </svg>
        );
    }
);
