import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconMonitor24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M1 4.75A2.75 2.75 0 013.75 2h16.5A2.75 2.75 0 0123 4.75v10.5A2.75 2.75 0 0120.25 18H12.5v2.5H16a.75.75 0 010 1.5H8a.75.75 0 010-1.5h3V18H3.75A2.75 2.75 0 011 15.25V4.75zM20.25 16.5c.69 0 1.25-.56 1.25-1.25V4.75c0-.69-.56-1.25-1.25-1.25H3.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h16.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
