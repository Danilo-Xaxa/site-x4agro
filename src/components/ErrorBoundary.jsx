import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-branco">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-verde-escuro mb-4">
              Algo deu errado
            </h1>
            <p className="text-escuro/70 mb-6">
              Por favor, recarregue a página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-verde-escuro text-white px-6 py-3 rounded-lg hover:bg-verde-medio transition-colors"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
