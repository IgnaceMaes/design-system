import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconServerCluster24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 .5a2.5 2.5 0 00-.75 4.886v1.67a4.998 4.998 0 00-3.255 1.95l-1.731-.944a2.5 2.5 0 10-1.061 1.13l2.083 1.137A4.993 4.993 0 007 12c0 .615.111 1.206.316 1.752l-1.768 1.285a2.5 2.5 0 10.845 1.24l1.66-1.207a4.996 4.996 0 003.197 1.874v1.67a2.501 2.501 0 101.5 0v-1.67a4.996 4.996 0 003.197-1.874l1.66 1.207a2.5 2.5 0 10.845-1.24l-1.768-1.285A4.991 4.991 0 0017 12c0-.585-.1-1.148-.286-1.671l2.083-1.137a2.5 2.5 0 10-1.06-1.13l-1.732.945a4.998 4.998 0 00-3.255-1.951v-1.67A2.501 2.501 0 0012 .5zM11 3a1 1 0 112 0 1 1 0 01-2 0zM4 6a1 1 0 100 2 1 1 0 000-2zm0 10a1 1 0 100 2 1 1 0 000-2zm7 5a1 1 0 112 0 1 1 0 01-2 0zm9-5a1 1 0 100 2 1 1 0 000-2zm0-10a1 1 0 100 2 1 1 0 000-2zM8.91 10.353a3.5 3.5 0 016.18 0c.261.49.41 1.05.41 1.647s-.149 1.157-.41 1.647a3.5 3.5 0 01-6.18 0A3.482 3.482 0 018.5 12c0-.597.149-1.157.41-1.647z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
