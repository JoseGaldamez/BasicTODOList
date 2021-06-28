import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './multiplehooks.css';

const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes/'+counter);
    const {author, quote} = !!data && data[0];


    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                loading ? (
                    <div className="alert alert-info text-center">
                Loading...
            </div>
                ) : (
                    <blockquote className="blockquote text-right">
                        <p className="mb-10">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            } 


            <button
                onClick={increment}
                className="btn btn-primary">
                    Next quote
            </button>

            
        </div>
    );
};


export default MultipleCustomHooks;