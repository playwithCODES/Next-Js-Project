import ServerComponents from '@/Components/ServerComponents'
import ContactPage from './contact/page'

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        HomePage
      </h1>
      <ServerComponents/>
      <ContactPage/>
    </div>
  )
}

export default HomePage;
