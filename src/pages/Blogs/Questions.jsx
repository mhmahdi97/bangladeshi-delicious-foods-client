import React from 'react';

const Questions = (props) => {
    const {question, answer} = props.question;
    return (
        <div>
            <div className='container mx-auto mb-6'>
                <h2>{question}:</h2>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default Questions;