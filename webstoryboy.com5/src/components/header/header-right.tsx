import React from 'react'
import { auth } from '@/auth'
import HeaderMenu from './header-menu'

export default async function HeaderRight() {
  const session = await auth()

  return <HeaderMenu session={session} />
}
