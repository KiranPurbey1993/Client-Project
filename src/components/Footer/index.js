import React from "react";
import Styles from "./style.module.scss"

// !definition of component
/**
 *
 * @param props --> 
 * @description -->  
 * @returns Button component
 */
// ! component

const Footer = (props) => {
    return(
        <div>
            <footer className={Styles.header}>
                <table>
                    <tr>
                        <td>
                            Footer
                        </td>
                    </tr>
                </table>
            </footer>
        </div>
    )
}

export default Footer;