import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Landing from "../components/Landing";

const inter = Inter({ subsets: ["latin"] });
export default function Home({ API_URL }: any) {
  return (
    <>
      <Head>
        <title>Afet Hazırlık - Olası afetlere karşı hazırlıklı olun</title>
      </Head>

      <Landing />
    </>
  );
}
