import React from 'react'
import Spinner from '../components/UI/Spinner/Spinner'

const withSpinner = (WrappedComponent) => ({isLoading, match}) => {
    return (
         isLoading ? <Spinner/> : <WrappedComponent match={match}/> 
    )
}

export default withSpinner;