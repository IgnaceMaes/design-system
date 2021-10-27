import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconWall24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M3.75 2A2.75 2.75 0 001 4.75v14.5A2.75 2.75 0 003.75 22h16.5A2.75 2.75 0 0023 19.25V4.75A2.75 2.75 0 0020.25 2H3.75zM6.5 3.5H3.75c-.69 0-1.25.56-1.25 1.25V8h4V3.5zm-4 6v5H11v-5H2.5zm0 6.5v3.25c0 .69.56 1.25 1.25 1.25H6.5V16h-4zM8 20.5h8V16H8v4.5zm9.5 0h2.75c.69 0 1.25-.56 1.25-1.25V16h-4v4.5zm4-6v-5h-9v5h9zm0-6.5V4.75c0-.69-.56-1.25-1.25-1.25H17.5V8h4zM16 3.5V8H8V3.5h8z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
