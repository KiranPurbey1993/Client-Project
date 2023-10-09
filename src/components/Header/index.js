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

const Header = (props) => {
    return(
        <div>
            <header className={Styles.header}>
                <table>
                    <tr>
                        <td>
                            Header
                        </td>
                    </tr>
                </table>
            </header>
        </div>
    )
}

export default Header;