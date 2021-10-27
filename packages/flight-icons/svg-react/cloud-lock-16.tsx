import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCloudLock16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M7.235 1.123a6.041 6.041 0 00-3.303.25A6.02 6.02 0 001.26 3.326a5.988 5.988 0 00-.404 6.76.75.75 0 101.286-.774 4.49 4.49 0 01-.62-2.766 4.488 4.488 0 01.922-2.3A4.52 4.52 0 014.451 2.78a4.541 4.541 0 014.688.961 4.496 4.496 0 011.26 2.135.75.75 0 00.726.561h.83c.676 0 1.324.268 1.8.743a2.524 2.524 0 01.451 2.969.75.75 0 101.326.702 4.02 4.02 0 00-.718-4.734 4.051 4.051 0 00-2.859-1.18h-.28a5.998 5.998 0 00-1.504-2.285 6.028 6.028 0 00-2.936-1.529zM8.75 12.25a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5z" />
                    <path
                        fillRule="evenodd"
                        d="M5.518 9.012c.035-.627.13-1.235.366-1.738.174-.37.435-.704.816-.94C7.08 6.101 7.52 6 8 6c.48 0 .921.1 1.3.334.381.236.642.57.816.94.236.503.331 1.111.366 1.738A2.25 2.25 0 0112.5 11.25v2.5A2.25 2.25 0 0110.25 16h-4.5a2.25 2.25 0 01-2.25-2.25v-2.5a2.25 2.25 0 012.018-2.238zM7.022 9c.032-.481.102-.838.22-1.087a.662.662 0 01.245-.302c.09-.055.243-.111.513-.111s.423.056.513.111c.087.054.17.141.246.302.117.249.187.606.219 1.087H7.022zm3.228 1.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 01.75-.75h4.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
