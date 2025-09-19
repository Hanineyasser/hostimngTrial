import React from "react";
import styles from "./Main.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const myname = "ahmed";
const students = ["ahmed", "hany", "ali", "nada"];
function Main() {
    return (
        <section className={styles.maincomponent}>
            <h1>welcome {myname} in main Component</h1>
            {/* self closing tag ->should be closed with / */}
            <img src="" />
            <label htmlFor="username">username</label>
            <input type="text" placeholder="username" id="username" />
            <ul>
                {students.map((student) => (
                    <li key={student}>{student}</li>
                ))}
            </ul>
        </section>
    );
}

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// )

export default Main;
