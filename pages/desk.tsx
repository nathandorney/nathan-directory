import Menu from '../components/Menu'
import Image from 'next/image';

const DeskPage = () => (
  <div>
    <Menu />
    <main>
      <h1>Desk</h1>
      <p>Cool beans.</p>
      <Image src="/desk.jpg" width={1702} height={2048} />
    </main>
  </div>
)

export default DeskPage
