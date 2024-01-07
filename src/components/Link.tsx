import { Ilink } from "data/links"
import { useEffect, useRef, useState } from "react"

interface ILinkProps {
    readonly index: number
    readonly link: Ilink
}

const Link = ({ index, link }: ILinkProps) => {
  const linkRef= useRef(null)
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      const timer1 = setTimeout(() => setShow(true), index * 100);
      return () => {
        clearTimeout(timer1);
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  return (
    <a href={link.url} target="_blank" className="w-full">
      <div ref={linkRef} className={`${show ? "flip" : ""} bg-black/40 rounded px-10 py-2 max-w-[700px] opacity-0`}>{link.label}</div>
    </a>
  )
}

export default Link