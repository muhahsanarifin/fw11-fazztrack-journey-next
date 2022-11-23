import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "src/redux/store";

function MyApp({ Component, pageProps }) {
  // console.log("app");
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
