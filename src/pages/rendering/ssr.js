// import { useEffect } from "react";
// import axios from "axios";

import Layout from "../../components/Layout";

export default function Ssr({ data, err }) {
  //  cek token via cookies (js-cookie)

  //   console.log(name, age);
  //   useEffect(() => {
  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon/ditto")
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);
  return (
    <Layout>
      <div>Data</div>
      <div>{data ? JSON.stringify(data) : "Terjadi Error"}</div>
      <div>Error</div>
      <div>{err ? JSON.stringify(err) : "Tidak Ada Error"}</div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  // asumsikan bahwa props datang dari server side
  console.log(process.env.CUSTOM_KEY);
  // private
  // cek token via cookies (next-cookies)
  // baca cookies dari context
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const result = await fetch(url);
    const data = await result.json();
    return {
      props: {
        data,
        err: null,
      },
    };
  } catch (err) {
    return {
      props: {
        data: null,
        err,
      },
    };
  }
};
