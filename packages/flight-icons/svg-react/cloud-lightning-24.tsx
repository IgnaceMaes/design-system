import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudLightning24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M11.819 1.485a8.86 8.86 0 00-4.357-.363 8.892 8.892 0 00-4.004 1.765A8.99 8.99 0 00.766 6.353a9.065 9.065 0 00.649 8.509 8.958 8.958 0 003.187 3.01.75.75 0 00.731-1.309 7.457 7.457 0 01-2.653-2.507 7.565 7.565 0 01-.54-7.1A7.49 7.49 0 014.381 4.07 7.392 7.392 0 017.711 2.6a7.36 7.36 0 013.618.302 7.421 7.421 0 013.046 1.999 7.522 7.522 0 011.744 3.22.75.75 0 00.727.565c1.732 0 3.082.103 4.213 1.134a4.44 4.44 0 01.589 5.888 4.356 4.356 0 01-2.643 1.702.75.75 0 00.302 1.47 5.857 5.857 0 003.553-2.288 5.94 5.94 0 00-.79-7.88c-1.427-1.3-3.094-1.495-4.66-1.522a9.017 9.017 0 00-1.93-3.304 8.92 8.92 0 00-3.662-2.402z" />
                    <path d="M14.031 11.03a.75.75 0 10-1.062-1.06l-4.75 4.77a.75.75 0 00.31 1.246l5.372 1.653-3.956 4.357a.75.75 0 001.11 1.008l4.75-5.23a.75.75 0 00-.334-1.222l-5.313-1.634 3.873-3.889z" />
                </g>
            </svg>
        );
    }
);
