import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory, categories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = e => {
        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue === '') {
           alert("Debe completar los campos");
        } else {
            setCategory([inputValue, ...categories]);
            setInputValue('');
        }


    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Search"></input>
        </form>

    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};
