import React, {useLayoutEffect, useState} from 'react';
import cx from 'classnames';
import './Admin.css';

const mins = 1; /* update transistion in css file */
const seconds = 6;
const updateTime = ((mins * 60) + seconds) * 1000;

const Admin = () => {
    const [hasClicked, setHasClicked] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useLayoutEffect(() => {
        const isAdminURL = window.location.search.includes('admin');
        if (isAdminURL && !isAdmin) {
            setIsAdmin(true);
        }
    }, [isAdmin]);

    useLayoutEffect(() => {
        if (hasClicked) {
            const timer = setTimeout(() => {
                window.location.reload();
            }, updateTime);
            return () => clearTimeout(timer);
        }
    }, [hasClicked]);

    if (!isAdmin) return null;

    const handleUpdate = () => {
        setHasClicked(true);
        var xhttp = new XMLHttpRequest();
        xhttp.open(
            'POST',
            'https://api.netlify.com/build_hooks/5d6680d6b404e83d68a278d2',
            true
        );
        xhttp.send();
    };

    return (
        <div className={cx('admin', {loading: hasClicked})}>
            <button onClick={handleUpdate} className="button">
                {hasClicked ? 'updating...' : `update ~ ${mins}m ${seconds}s`}
            </button>
        </div>
    );
};

export default Admin;
