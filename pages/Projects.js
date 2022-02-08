import Head from 'next/head';
import React from 'react'
import { setPageHeading } from '../Helper/Helper';


const Projects = ({setCurrentPage, setHeading}) => {

    setPageHeading(setCurrentPage, setHeading, "Projects");


    return (
        <>

        <Head>
            <title>My Projects</title>
        </Head>
            
        </>
    )
}

export default Projects
