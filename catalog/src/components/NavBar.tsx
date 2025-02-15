import React from 'react'
import { ModeToggle } from './ui/theme-toggle-button'
import Link from "next/link"
import { buttonVariants } from './ui/button'
export default function NavBar() {
  return (
    <nav className="w-full flex justify-between p-4">
      <Link href={"/"}>Next Crud</Link>
<div className="flex gap-2 items-center">
<Link href={"/new"} className={buttonVariants({variant:"secondary"})}>
Create Task
</Link>
<ModeToggle></ModeToggle>
</div>
      

    </nav>
  )
}
