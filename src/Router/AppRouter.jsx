import React, { useState } from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from '../components/Navbars/NavBar';
import CreateSuspect from '../components/NewSuspect/CreateSuspect';
import SuspectDetails from '../components/NewSuspect/SuspectDetails';


const routes = {
    "/": () => <div className="h-screen flex justify-center py-16">Home</div>,
    "/suspect/create": () => <CreateSuspect/>,
    "/suspect/details": () => <SuspectDetails/>,
};

const AppRouter = () => {
    const pages = useRoutes(routes)
    return(
        <div>
            <NavBar />
            {pages}
        </div>
    )
}


export default AppRouter