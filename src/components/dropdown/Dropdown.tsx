import { ReactNode } from 'react'
import { DropdownProvider } from './DropdownContext'

type Props = {
    children?: ReactNode 
}

export default function Dropdown({children}: Props) {
  return (
    <DropdownProvider>
    <div className="relative inline-block w-full">{children}</div>
  </DropdownProvider>
  )
}