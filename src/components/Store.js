import React from 'react';

function Store(props) {
    const { setIsLoggedIn } = props
    return (
        <div className='store'>
            <h2>Welcome to the store!</h2>
            <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
        </div>
    );
}

export default Store;
