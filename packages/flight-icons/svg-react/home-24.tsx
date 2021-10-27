import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconHome24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M11.847 2.819a.25.25 0 01.306 0l8.25 6.407a.25.25 0 01.097.198V21.25a.75.75 0 001.5 0V9.424c0-.54-.25-1.05-.677-1.382l-8.25-6.408a1.75 1.75 0 00-2.146 0l-8.25 6.408A1.75 1.75 0 002 9.424V21.25a.75.75 0 001.5 0V9.424a.25.25 0 01.097-.198l8.25-6.407z" />
                    <path d="M9.5 15.75a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25v5.5a.75.75 0 001.5 0v-5.5A1.75 1.75 0 0014.25 14h-4.5A1.75 1.75 0 008 15.75v5.5a.75.75 0 001.5 0v-5.5z" />
                </g>
            </svg>
        );
    }
);
