import Menu from "../components/Menu";
import Image from "next/image";

const PhotoPage = () => (
  <div>
    <Menu />
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

export default PhotoPage;
