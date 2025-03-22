import React from 'react';

function logoutBtn() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout()).then(() => {
            console.log('User Loggedout');
        });
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutBtn;