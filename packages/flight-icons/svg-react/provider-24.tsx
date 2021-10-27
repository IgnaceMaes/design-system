import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconProvider24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm-1 1.552a9.438 9.438 0 00-3.5 1.08v4.085L11 5.85V2.552zm-8.349 7.75A9.493 9.493 0 016 4.635v3.883l-3.349 1.786zm-.15 1.781L6 10.217v9.149a9.481 9.481 0 01-3.5-7.283zM11 17.02l-3.5 2.032V9.417L11 7.55v9.47zm1.5-.871V6.75L16 4.883v9.234l-3.5 2.032zm3.5-.298l-3.5 2.033v3.603a9.449 9.449 0 003.5-.868v-4.768zm1.5 3.896V14.98l3.977-2.309a9.491 9.491 0 01-3.977 7.076zm0-6.501V4.253a9.494 9.494 0 013.943 6.703l-3.943 2.29zM11 18.754l-3.117 1.81c.96.463 2.01.768 3.117.884v-2.694zM12.5 5.05V2.513c1.168.06 2.28.332 3.3.777l-3.3 1.76z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
