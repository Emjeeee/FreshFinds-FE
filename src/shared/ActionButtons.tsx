import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButtons = ({ children, setSelectedPage }: Props) => {
    return (
      <AnchorLink
        className="rounded-lg border border-orange px-10 py-2 hover:bg-orange hover:text-white duration-300"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
      >
          {children}
      </AnchorLink>
    )
  }

export default ActionButtons