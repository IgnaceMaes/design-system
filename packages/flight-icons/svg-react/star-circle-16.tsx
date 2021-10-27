import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconStarCircle16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.679 2.431a.75.75 0 00-1.358 0L6.023 5.196l-2.887.444a.75.75 0 00-.423 1.265l2.11 2.162-.499 3.062a.75.75 0 001.103.777L8 11.484l2.573 1.422a.75.75 0 001.103-.777l-.5-3.062 2.11-2.162a.75.75 0 00-.422-1.265l-2.887-.444-1.298-2.765zM7.21 6.195L8 4.515l.789 1.68a.75.75 0 00.565.423l1.84.283L9.838 8.29a.75.75 0 00-.203.644l.312 1.912-1.584-.876a.75.75 0 00-.726 0l-1.584.876.312-1.912a.75.75 0 00-.203-.644L4.806 6.9l1.84-.282a.75.75 0 00.565-.423z" />
                    <path d="M8 .05a7.95 7.95 0 100 15.9A7.95 7.95 0 008 .05zM1.45 8a6.55 6.55 0 1113.1 0 6.55 6.55 0 01-13.1 0z" />
                </g>
            </svg>
        );
    }
);
