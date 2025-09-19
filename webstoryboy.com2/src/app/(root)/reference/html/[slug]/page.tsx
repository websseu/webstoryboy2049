import React from 'react'
import { notFound } from 'next/navigation'

import A from '@/blog/reference/html/a'
import Abbr from '@/blog/reference/html/abbr'
import Address from '@/blog/reference/html/address'
import Article from '@/blog/reference/html/article'
import Aside from '@/blog/reference/html/aside'
import Audio from '@/blog/reference/html/audio'
import B from '@/blog/reference/html/b'
import Base from '@/blog/reference/html/base'
import Blockquote from '@/blog/reference/html/blockquote'
import Body from '@/blog/reference/html/body'
import Br from '@/blog/reference/html/br'
import Button from '@/blog/reference/html/button'
import Canvas from '@/blog/reference/html/canvas'
import Caption from '@/blog/reference/html/caption'
import Cite from '@/blog/reference/html/cite'
import Code from '@/blog/reference/html/code'
import Col from '@/blog/reference/html/col'
import Colgroup from '@/blog/reference/html/colgroup'
import Del from '@/blog/reference/html/del'
import Details from '@/blog/reference/html/details'
import Div from '@/blog/reference/html/div'
import Dl from '@/blog/reference/html/dl'
import Dt from '@/blog/reference/html/dt'
import Dd from '@/blog/reference/html/dd'
import Em from '@/blog/reference/html/em'
import Embed from '@/blog/reference/html/embed'
import Fieldset from '@/blog/reference/html/fieldset'
import Figcaption from '@/blog/reference/html/figcaption'
import Figure from '@/blog/reference/html/figure'
import Footer from '@/blog/reference/html/footer'
import Form from '@/blog/reference/html/form'
import H1 from '@/blog/reference/html/h1'
import H2 from '@/blog/reference/html/h2'
import H3 from '@/blog/reference/html/h3'
import H4 from '@/blog/reference/html/h4'
import H5 from '@/blog/reference/html/h5'
import H6 from '@/blog/reference/html/h6'
import Head from '@/blog/reference/html/head'
import Header from '@/blog/reference/html/header'
import Hr from '@/blog/reference/html/hr'
import Html from '@/blog/reference/html/html'
import I from '@/blog/reference/html/i'
import Iframe from '@/blog/reference/html/iframe'
import Img from '@/blog/reference/html/img'
import Input from '@/blog/reference/html/input'
import Ins from '@/blog/reference/html/ins'
import Kbd from '@/blog/reference/html/kbd'
import Label from '@/blog/reference/html/label'
import Legend from '@/blog/reference/html/legend'
import Li from '@/blog/reference/html/li'
import Link from '@/blog/reference/html/link'
import Main from '@/blog/reference/html/main'
import Mark from '@/blog/reference/html/mark'
import Meta from '@/blog/reference/html/meta'
import Nav from '@/blog/reference/html/nav'
import Noscript from '@/blog/reference/html/noscript'
import Ol from '@/blog/reference/html/ol'
import Optgroup from '@/blog/reference/html/optgroup'
import Option from '@/blog/reference/html/option'
import Output from '@/blog/reference/html/output'
import P from '@/blog/reference/html/p'
import Picture from '@/blog/reference/html/picture'
import Pre from '@/blog/reference/html/pre'
import Progress from '@/blog/reference/html/progress'
import Q from '@/blog/reference/html/q'
import S from '@/blog/reference/html/s'
import Script from '@/blog/reference/html/script'
import Section from '@/blog/reference/html/section'
import Select from '@/blog/reference/html/select'
import Small from '@/blog/reference/html/small'
import Source from '@/blog/reference/html/source'
import Span from '@/blog/reference/html/span'
import Strong from '@/blog/reference/html/strong'
import Style from '@/blog/reference/html/style'
import Sub from '@/blog/reference/html/sub'
import Summary from '@/blog/reference/html/summary'
import Sup from '@/blog/reference/html/sup'
import Svg from '@/blog/reference/html/svg'
import Table from '@/blog/reference/html/table'
import Tbody from '@/blog/reference/html/tbody'
import Td from '@/blog/reference/html/td'
import Template from '@/blog/reference/html/template'
import Textarea from '@/blog/reference/html/textarea'
import Tfoot from '@/blog/reference/html/tfoot'
import Th from '@/blog/reference/html/th'
import Thead from '@/blog/reference/html/thead'
import Time from '@/blog/reference/html/time'
import Title from '@/blog/reference/html/title'
import Tr from '@/blog/reference/html/tr'
import U from '@/blog/reference/html/u'
import Ul from '@/blog/reference/html/ul'
import Video from '@/blog/reference/html/video'
import Wbr from '@/blog/reference/html/wbr'

const componentMap: Record<string, React.FC> = {
  a: A,
  abbr: Abbr,
  address: Address,
  article: Article,
  aside: Aside,
  audio: Audio,
  b: B,
  base: Base,
  blockquote: Blockquote,
  body: Body,
  br: Br,
  button: Button,
  canvas: Canvas,
  caption: Caption,
  cite: Cite,
  code: Code,
  col: Col,
  colgroup: Colgroup,
  del: Del,
  details: Details,
  div: Div,
  dl: Dl,
  dt: Dt,
  dd: Dd,
  em: Em,
  embed: Embed,
  fieldset: Fieldset,
  figcaption: Figcaption,
  figure: Figure,
  footer: Footer,
  form: Form,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  head: Head,
  header: Header,
  hr: Hr,
  html: Html,
  i: I,
  iframe: Iframe,
  img: Img,
  input: Input,
  ins: Ins,
  kbd: Kbd,
  label: Label,
  legend: Legend,
  li: Li,
  link: Link,
  main: Main,
  mark: Mark,
  meta: Meta,
  nav: Nav,
  noscript: Noscript,
  ol: Ol,
  optgroup: Optgroup,
  option: Option,
  output: Output,
  p: P,
  picture: Picture,
  pre: Pre,
  progress: Progress,
  q: Q,
  s: S,
  script: Script,
  section: Section,
  select: Select,
  small: Small,
  source: Source,
  span: Span,
  strong: Strong,
  style: Style,
  sub: Sub,
  summary: Summary,
  sup: Sup,
  svg: Svg,
  table: Table,
  tbody: Tbody,
  td: Td,
  template: Template,
  textarea: Textarea,
  tfoot: Tfoot,
  th: Th,
  thead: Thead,
  time: Time,
  title: Title,
  tr: Tr,
  u: U,
  ul: Ul,
  video: Video,
  wbr: Wbr,
}

export default async function HtmlDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const Comp = componentMap[slug]

  if (!Comp) {
    notFound()
  }

  return <Comp />
}

// 빌드 시 생성할 slug 목록
// export async function generateStaticParams() {
//   return Object.keys(componentMap).map((slug) => ({ slug }))
// }
