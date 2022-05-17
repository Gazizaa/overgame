import React from 'react'

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{children}, ErrorBoundaryState> {
  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error) {
    // tslint:disable-next-line:no-console
    console.error(error)
  }

  render() {
    if (this.state.hasError) {
      return <div style={{color: 'white', fontWeight: 600, padding: '20px'}}>Error</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
