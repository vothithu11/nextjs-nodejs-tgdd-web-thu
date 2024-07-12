import React from 'react';

const ButtonBrandName = ({ image }) => {
    return (
        <div className="border-2 rounded-full mx-2 hover:border-blue-500">
            <img src={image} alt="hinh-anh" className="rounded-full" />
        </div>
    );
};

export default ButtonBrandName;
