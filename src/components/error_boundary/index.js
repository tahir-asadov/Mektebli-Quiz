import React from 'react';

import AppCrashed from '../app_crashed';

class ErrorBoundary extends React.Component {
  state = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }

  componentDidCatch(error, info) {
    this.logErrorToServices(error.toString(), info.componentStack);
  }

  // A fake logging service.
  logErrorToServices = console.log;

  render() {
    if (this.state.errorMessage) {
      return <AppCrashed message={ this.state.errorMessage } />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
