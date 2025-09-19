'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  language: string
  code: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className='relative my-4'>
      {/* 복사 버튼 */}
      <button
        onClick={handleCopy}
        className='absolute top-2 right-2 bg-gray-800 text-white p-1 rounded hover:bg-gray-700 transition'
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>

      {/* 코드 블록 */}
      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock
