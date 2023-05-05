// import all modules
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../routes/providers/AuthContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FaGithub, FaGoogle } from "react-icons/fa";

// main component
const Login = () => {
    const [error, setError] = useState('');


    const { auth, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                // setError(error.message === 'auth/wrong-password' ? 'You Have Entered a Wrong Password' : error.message === 'auth/user-not-found' ? 'Account Not Found' : '');

            //     if(error.message === 'auth/wrong-password') {
            //     setError('You Have Entered a Wrong Password')
            //     console.log(error)
            // }
            //     else if (error.message === 'auth/user-not-found') {
            //         setError('Account Not Found')
            //         console.log(error)
            //     }
            })

            console.log(error)

            // if (error.message === 'auth/wrong-password') {
            //     setError('You Have Entered a Wrong Password')
            //     console.log(error)
            // }
    }

    // const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    const gitHubProvider = new GithubAuthProvider;

    const handleGoogleSignIn = () => {
                signInWithPopup(auth, googleProvider)
                .then(result => {
                    const googleUser = result.user;
                    console.log(googleUser);
                    navigate(from, { replace: true })
                })
                .catch(error => {
                    console.log(error)
                })
            }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const githubUser = result.user;
            console.log(githubUser);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }    
      
    return (
        <div className="hero min-h-screen bg-stone-100">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-teal-800">Login to Your Food Account!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-stone-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover text-blue-600">Forgot password?</a>
                                
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-stone-500 hover:bg-stone-600">Login</button>
                        </div>
                    </form>
    
                    <p className='mb-4 ml-8'>
                        Dont Have Account? Please <Link to="/register" className=" text-blue-600">Register</Link>
                    </p>
                    <div>
                        <div className='flex justify-center mb-3'>
                            <div>
                                <button onClick={handleGoogleSignIn} className=" bg-stone-500 hover:bg-stone-600 px-4 py-2 mr-3 rounded-md text-white font-semibold text-center">Sign-In with Google <FaGoogle /> </button>
                                <button onClick={handleGitHubSignIn} className=" bg-stone-500 hover:bg-stone-600 px-4 py-2 rounded-md text-white font-semibold text-center">Sign-In with Github  <FaGithub /> </button>
                            </div>  
                                    
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;