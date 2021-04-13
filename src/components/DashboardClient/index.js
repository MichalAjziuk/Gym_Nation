import React, {useState} from 'react'
import navbar_dbcl from './NavbarDBCL';

const DashboardClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <navbar_dbcl />
        </>
    )
}

export default DashboardClient
