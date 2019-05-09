import * as React from "react";
import * as ReactDOM from "react-dom";
import AppWrapper from './pages/app';

const render = () => {
    // className={styles.appWrapper} 
    ReactDOM.render(
        <AppWrapper/>,
        document.querySelector("#app"),
    );
};

render();
