import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconShieldOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.74.213a2.25 2.25 0 00-1.48 0L6.035.64a.75.75 0 00.493 1.417l1.226-.427a.75.75 0 01.493 0l4.75 1.653a.75.75 0 01.504.708v4.01c0 .334-.044.661-.127.98a.75.75 0 101.453.374C14.938 8.922 15 8.47 15 8V3.991a2.25 2.25 0 00-1.51-2.125L8.74.213z" />
                    <path
                        fillRule="evenodd"
                        d="M1.447 2.507L.72 1.78A.75.75 0 011.78.72l13.5 13.5a.75.75 0 11-1.06 1.06l-1.988-1.987c-1.2 1.098-2.505 1.886-3.254 2.296a2.026 2.026 0 01-1.955 0c-.816-.446-2.291-1.341-3.572-2.597C2.18 11.748 1 10.05 1 8V3.72c0-.456.165-.882.447-1.213zm1.078 1.079a.366.366 0 00-.025.133V8c0 1.456.847 2.79 2 3.92 1.142 1.12 2.483 1.938 3.244 2.354.162.09.35.09.513 0 .69-.378 1.854-1.084 2.913-2.043L2.525 3.586z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
