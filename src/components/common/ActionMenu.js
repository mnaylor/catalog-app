import React from "react";
import { ToggleLayer, useHover } from "react-laag";

import Button from '@material-ui/core/Button';

export default function ActionMenu() {
    const [isOpen, hoverProps] = useHover();

    return (
        <ToggleLayer
            // should we show the tooltip?
            isOpen={isOpen}
            // this is the place where we render the tooltip
            renderLayer={({ isOpen, layerProps }) =>
                isOpen && (
                    <div
                        // provide a 'ref' for calculation purposes
                        ref={layerProps.ref}
                        style={{
                            // forward the 'style' we received from
                            // 'renderLayer'
                            ...layerProps.style,
                            // provide our own styles
                            backgroundColor: "black",
                            color: "white",
                            padding: "2px 8px",
                            fontSize: 12,
                            borderRadius: 4
                        }}
                    >
                    </div>
                )
            }
        >
            {({ triggerRef }) => (
                // wrap the 'children' in a 'span' element
                // and apply the 'triggerRef' and 'hoverProps'
                <span ref={triggerRef} {...hoverProps}>
                </span>
            )}
        </ToggleLayer>
    );
}