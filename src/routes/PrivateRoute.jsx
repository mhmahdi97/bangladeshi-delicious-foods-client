import React from 'react';

const privateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if(loading){
        return <button className="btn btn-square loading"></button>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default privateRoutes;