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
        className="rounded-full bg-orange lg:px-10 lg:py-2 py-4 px-7 hover:bg-transparent hover:text-orange hover:border border-orange duration-300"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
      >
            {children}
      </AnchorLink>
    )
  }

export default ActionButtonss