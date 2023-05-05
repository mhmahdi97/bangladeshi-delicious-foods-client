import React, { useEffect, useState } from 'react';
import Questions from './Questions';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        fetch('questions.json')
        .then(res => res.json())
        .then (data => setQuestions(data))
    }, [])
    console.log(questions)
    return (
        <div>
             {
                questions.map(question => <Questions
                question = {question}
                ></Questions>)
            }
        </div>
    );
};

export default Blogs;