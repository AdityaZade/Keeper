import React from "react"


function Footer() {

    const currentYear = new Date().getFullYear()

    return <footer>
        <p className="footer p"> CopyRight ⓒ by IamAditya {currentYear}  </p>
    </footer>



}
export default Footer