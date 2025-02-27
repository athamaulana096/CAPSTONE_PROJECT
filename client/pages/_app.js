import TopNav from "../component/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "../public/css/styles.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "../context";

function Myapp ({Component, pageProps}) {
    return (
    <Provider>
        <ToastContainer position="top-center" />
            <TopNav />
            <Component {...pageProps} />
    </Provider>
    )
}

export default Myapp;