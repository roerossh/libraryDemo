import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./index.scss";

const render = () => {
    ReactDOM.render(
        <div className={styles.appWrapper}>ibrary demo</div>,
        document.querySelector("#app"),
    );
};

render();
