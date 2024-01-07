import Header from "./Header"
import List from "./List"

const Page = () => {
  return (
    <div className="container-flex h-screen">
      <div className="container mx-auto py-10 px-5 flex flex-col gap-10">
        <Header />
        <List />
      </div>
    </div>
  )
}

export default Page