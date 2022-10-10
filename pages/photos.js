import Layout from "../components/Layout";
import Image from "next/image";

export default function Photo() {
  return (
    <div>
      <main>
        <h1>Photography</h1>
        <p>I like to take photos from time to time</p>
        <Image
          src="/media/photography/man-canton.jpeg"
          width={2000}
          height={2000}
        ></Image>
      </main>
    </div>
  );
}

Photo.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
