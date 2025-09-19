'use client'

import React from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return (
          <FallbackComponent error={this.state.error!} reset={this.reset} />
        )
      }

      return (
        <DefaultErrorFallback error={this.state.error!} reset={this.reset} />
      )
    }

    return this.props.children
  }
}

function DefaultErrorFallback({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className='min-h-[400px] flex items-center justify-center'>
      <div className='text-center space-y-4 max-w-md mx-auto'>
        <div className='flex justify-center'>
          <AlertCircle className='h-16 w-16 text-red-500' />
        </div>

        <div className='space-y-2'>
          <h2 className='text-xl font-semibold text-gray-900'>
            문제가 발생했습니다
          </h2>
          <p className='text-gray-600 text-sm leading-relaxed'>
            예상치 못한 오류가 발생했습니다. 다시 시도해주세요.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className='text-left text-xs text-gray-500 mt-2'>
              <summary className='cursor-pointer'>오류 상세정보</summary>
              <pre className='mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto'>
                {error.message}
              </pre>
            </details>
          )}
        </div>

        <div className='pt-4 space-x-2'>
          <Button onClick={reset} className='flex items-center gap-2'>
            <RefreshCw className='h-4 w-4' />
            다시 시도
          </Button>
        </div>
      </div>
    </div>
  )
}
