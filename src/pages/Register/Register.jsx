// import all modules
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../routes/providers/AuthContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    // all hooks
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    // register event handler
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        if(password.length < 6){
            setError('Password Must Contain 6 Characters or Longer')
            return
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                toast.success('Registration Completed Successfully!')
                navigate('/')

                
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }


    return (
        <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="hero min-h-screen bg-stone-100">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-teal-800">Please Register to See Our Delicious Foods!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-800 text-lg font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-800 text-lg font-bold">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-teal-800 text-lg font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg text-teal-800 font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                            <label className="label">
                                <p className='text-red-500 text-lg'>{error}</p> 
                                
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-stone-500 hover:bg-stone-600">Register</button>
                        </div>
                    </form>
    
                    <p className='mb-4 ml-8'>
                        Already Have an Account? Login <Link to="/login" className="text-blue-600">Here</Link>
                    </p>
                    <div>
                       
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;