import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLayout24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M2 4.75A2.75 2.75 0 014.75 2h14.5A2.75 2.75 0 0122 4.75v14.5A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25V4.75zM9 20.5h10.25c.69 0 1.25-.56 1.25-1.25V9.5H9v11zm-1.5-11v11H4.75c-.69 0-1.25-.56-1.25-1.25V9.5h4zm13-1.5V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25V8h17z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
