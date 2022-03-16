import React from 'react';

function Footer() {
    
    const date = new Date();
    let year = date.getFullYear();
    return (
        <footer>
            <h5>Copyright &copy; {year} | Your Manok</h5>
        </footer>
    )
}

export default Footer
