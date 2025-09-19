import React from 'react'
import { notFound } from 'next/navigation'

export default async function CssDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let Comp: React.FC

  try {
    const mod = await import(`@/blog/reference/css/${slug}`)
    Comp = mod.default
  } catch (error) {
    console.log(error)
    return notFound()
  }

  return <Comp />
}
