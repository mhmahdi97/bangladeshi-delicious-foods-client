// import all modules
import React, { useContext } from 'react';
import { AuthContext } from '../../routes/providers/AuthContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../utilities/firebase.config';

// main component
const Login = () => {


    const { signIn, signInWithGoogle, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const auth = getAuth(app);
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-teal-800">Login to Your Food Account!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-stone-500 hover:bg-stone-600">Login</button>
                        </div>
                    </form>
                    <p className='mb-4 ml-8'>
                        <Link to="/register" className="label-text-alt link link-hover">
                            Dont Have Account? Please Register
                        </Link>
                    </p>
                    <div>
                        <div className='flex justify-center mb-3'>
                            <div><button onClick={handleGoogleSignIn} className=" bg-stone-500 hover:bg-stone-600 px-2 py-2 mr-3 rounded-md text-white font-semibold text-center">Sign in With Google</button>
                            <button onClick={handleGitHubSignIn} className=" bg-stone-500 hover:bg-stone-600 px-2 py-2 rounded-md text-white font-semibold text-center">Sign in With Github</button>
                            </div>  
                                    
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;