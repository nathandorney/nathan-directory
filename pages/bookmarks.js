import Layout from "../components/Layout";
export default function Bookmarks() {
  return (
    <div>
      <main>
        <h1>Bookmarks</h1>
        <p>Links</p>
      </main>
    </div>
  );
}

Bookmarks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
