import React from 'react';
import './search-box.styles.css'

const SearchBox = ({onSearchHandler, placeHolder, classname}) => {
    return (
        <div>
            <input
                type="search"
                className={`search-box ${classname}`}
                placeholder={placeHolder}
                onChange={onSearchHandler}
            /></div>
    );
};

export default SearchBox;
