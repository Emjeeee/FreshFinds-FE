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
          className="bg-orange rounded-lg px-10 py-2 "
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
      >
          {children}
      </AnchorLink>
    )
  }

export default ActionButtons