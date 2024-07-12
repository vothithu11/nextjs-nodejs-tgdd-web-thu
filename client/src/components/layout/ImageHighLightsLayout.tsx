import React from 'react';

function ImageHighLightsLayout({ children, title, valueGrid }) {
    return (
        <div className="my-8">
            <h2 className="text-2xl uppercase font-semibold padding-y">{title}</h2>
            <div className={`grid ${valueGrid}  gap-1`}>{children}</div>
        </div>
    );
}

export default ImageHighLightsLayout;
