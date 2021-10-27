import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGridAlt16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 .75A.75.75 0 01.75 0h2.5A.75.75 0 014 .75v2.5a.75.75 0 01-.75.75H.75A.75.75 0 010 3.25V.75zm1.5.75v1h1v-1h-1zM6 .75A.75.75 0 016.75 0h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5A.75.75 0 016 3.25V.75zm1.5.75v1h1v-1h-1zM12.75 0a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V.75a.75.75 0 00-.75-.75h-2.5zm.75 2.5v-1h1v1h-1zM0 6.75A.75.75 0 01.75 6h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75H.75A.75.75 0 010 9.25v-2.5zm1.5.75v1h1v-1h-1zM6.75 6a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-2.5A.75.75 0 009.25 6h-2.5zm.75 2.5v-1h1v1h-1zM12 6.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5zm1.5.75v1h1v-1h-1zM.75 12a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75H.75zm.75 2.5v-1h1v1h-1zM6 12.75a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-2.5zm1.5.75v1h1v-1h-1zM12.75 12a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5zm.75 2.5v-1h1v1h-1z" />
                </g>
            </svg>
        );
    }
);
