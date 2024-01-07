import links from "../data/links"
import Link from "./Link"

const List = () => {
  return (
    <main className="flex flex-col gap-9 items-center">
      {
        links.map((elem, index)=> (
          <Link key={index} index={index} link={elem} />
        ))
      }
    </main>
  )
}

export default List