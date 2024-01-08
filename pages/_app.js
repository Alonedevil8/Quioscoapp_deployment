import "../styles/globals.css";
import { QuioscoProvider } from "../context/QuioscoProvider";

function Myapp({ Component, pageProps }) {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  );
}

export default Myapp;
