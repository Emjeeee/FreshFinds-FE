import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButtonss = ({ children, setSelectedPage }: Props) => {
    return (
      <AnchorLink
        className="rounded-full bg-orange px-10 py-2 hover:bg-transparent hover:text-orange hover:border border-orange duration-300"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
      >
            {children}
      </AnchorLink>
    )
  }

export default ActionButtonss