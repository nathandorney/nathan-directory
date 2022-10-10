import Image from "next/image";
import Layout from "../components/Layout";

export default function Desk() {
  return (
    <div>
      <main>
        <h1>Desk</h1>
        <p>Cool beans.</p>
        <Image src="/media/desk/desk.jpg" width={1702} height={2048} />
        <Image src="/media/desk/art.jpeg" width={2048} height={1365} />
        <Image src="/media/desk/keys.png" width={2000} height={1334} />
        <Image src="/media/desk/second-board.jpeg" width={1024} height={683} />
      </main>
    </div>
  );
}

Desk.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
