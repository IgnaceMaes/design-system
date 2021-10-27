import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconServerless16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M3.75 11.5a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M1.28.22A.75.75 0 00.22 1.28c-.141.294-.22.623-.22.97v2.5A2.25 2.25 0 002.25 7h3.69l2 2H2.25A2.25 2.25 0 000 11.25v2.5A2.25 2.25 0 002.25 16h11.5c.347 0 .676-.079.97-.22a.75.75 0 001.06-1.06L1.28.22zm.97 10.28h7.19l4 4H2.25a.75.75 0 01-.75-.75v-2.5a.75.75 0 01.75-.75zm2.19-5L1.5 2.56v2.19c0 .414.336.75.75.75h2.19z"
                        clipRule="evenodd"
                    />
                    <path d="M13.75 0H5a.75.75 0 000 1.5h8.75a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75H10.5a.75.75 0 000 1.5h3.25A2.25 2.25 0 0016 4.75v-2.5A2.25 2.25 0 0013.75 0zM13 9.75a.75.75 0 01.75-.75A2.25 2.25 0 0116 11.25a.75.75 0 01-1.5 0 .75.75 0 00-.75-.75.75.75 0 01-.75-.75z" />
                </g>
            </svg>
        );
    }
);
