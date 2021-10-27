import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconSupport24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M19.828 19.728A10.965 10.965 0 0023 12c0-3.012-1.21-5.742-3.172-7.728a.77.77 0 00-.1-.1A10.965 10.965 0 0012 1C8.988 1 6.258 2.21 4.272 4.172a.767.767 0 00-.1.1A10.965 10.965 0 001 12c0 3.012 1.21 5.742 3.172 7.728a.77.77 0 00.1.1A10.965 10.965 0 0012 23c3.012 0 5.742-1.21 7.728-3.172a.771.771 0 00.1-.1zM2.5 12c0-2.353.856-4.507 2.273-6.166l3.2 3.2A4.978 4.978 0 007 12c0 1.11.362 2.136.974 2.965l-3.201 3.201A9.462 9.462 0 012.5 12zm7.094 2.542A3.488 3.488 0 0012 15.5c.932 0 1.779-.364 2.406-.958a.769.769 0 01.136-.136A3.488 3.488 0 0015.5 12c0-.932-.364-1.779-.958-2.406a.768.768 0 01-.136-.136A3.488 3.488 0 0012 8.5c-.932 0-1.779.364-2.406.958a.768.768 0 01-.136.136A3.488 3.488 0 008.5 12c0 .932.364 1.779.958 2.406.05.039.097.086.136.136zm5.371 1.484A4.978 4.978 0 0112 17a4.978 4.978 0 01-2.965-.974l-3.201 3.201A9.462 9.462 0 0012 21.5a9.462 9.462 0 006.166-2.273l-3.2-3.2zm4.262 2.14l-3.2-3.2c.611-.83.973-1.856.973-2.966s-.362-2.136-.974-2.965l3.201-3.201A9.462 9.462 0 0121.5 12a9.462 9.462 0 01-2.273 6.166zm-1.06-13.393l-3.202 3.2A4.977 4.977 0 0012 7c-1.11 0-2.136.362-2.965.974L5.834 4.773A9.463 9.463 0 0112 2.5c2.353 0 4.507.856 6.166 2.273z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
