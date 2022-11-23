import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import styles from "styles/Counter.module.css";
import { counterUp, counterDown, counterReset } from "src/redux/store";
import Layout from "components/Layout";

function ProductDetails() {
  const router = useRouter();
  const counter = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  // console.log(counter);
  return (
    <Layout isHeaderShown>
      <div>ProductDetails: {router.query.id}</div>
      <div
        className="btn btn-primary ms-2 mt-2"
        onClick={() => {
          router.push("/");
        }}
      >
        Register
      </div>
      <section className={styles["counter"]}>
        <section className={styles["display"]}>{counter.number}</section>
        <section className={styles["control"]}>
          <div className={styles["up"]} onClick={() => dispatch(counterUp())}>
            &uarr;
          </div>
          <div
            className={styles["down"]}
            onClick={() => dispatch(counterDown())}
          >
            &darr;
          </div>
          <div
            className={styles["reset"]}
            onClick={() => dispatch(counterReset())}
          >
            &#8634;
          </div>
        </section>
      </section>
    </Layout>
  );
}

export default ProductDetails;
