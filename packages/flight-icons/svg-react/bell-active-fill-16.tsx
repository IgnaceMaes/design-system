import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBellActiveFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M14.25 10.5c-.462 0-1.25-.386-1.25-1.72V6.742a.75.75 0 00-.8-.749 3 3 0 01-3.037-3.975.75.75 0 00-.63-.99A5.092 5.092 0 008 1C4.907 1 3 3.665 3 6.405V8.78c0 1.334-.788 1.72-1.25 1.72a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5z" />
                    <path d="M12 5a2 2 0 100-4 2 2 0 000 4zM6.898 12.872a.75.75 0 00-1.296.756A2.773 2.773 0 008 15c1.023 0 1.918-.55 2.398-1.372a.75.75 0 00-1.296-.756c-.219.374-.63.628-1.102.628-.473 0-.883-.254-1.102-.628z" />
                </g>
            </svg>
        );
    }
);
