import React from 'react';

const Container = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            {children}
        </div>
    );
};

export default Container;