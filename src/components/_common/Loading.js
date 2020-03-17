import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type = "spin" }) => (
    <ReactLoading className="loading" type={type} color='#464646' />
);

export default Loading;