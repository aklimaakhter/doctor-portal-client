import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className=" btn btn-natural bg-gradient-to-r from-secondary to-primary font bold text-white">{children}</button>
    );
};

export default PrimaryButton;