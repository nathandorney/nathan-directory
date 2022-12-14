import Image from "next/image";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <div>
      <main>
        <Image src="/avatar.jpg" width={64} height={64} className="avatar" />
        <h1>Hey! I'm Nathan</h1>
        <p>
          A software designer working at Logic and Rhythm, a design studio
          helping early stage companies get off the ground.
        </p>
        <p>
          In my spare time, you can find me at a pottery wheel, taking pictures
          with a film camera or baking a loaf of sourdough. I have a habit of
          juggling a bunch of hobbies, and gravitate towards anything that
          involves craft and iteration.
        </p>
      </main>
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
