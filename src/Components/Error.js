import React from 'react'
import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError();
    return (
        <>
            {console.log("Error Occur", err)}
            <h1>Opps</h1>
            <h3>This is an error page!</h3>
            <p>{err?.status} - {err?.statusText}</p>
        </>
    )
}

export default Error;