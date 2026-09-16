"use client";

import React, { Component, ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackMessage?: string;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ExperimentErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: ""
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Experiment Runner encountered an error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-museum-charcoal p-6 text-center border border-museum-border rounded-[4px] z-50">
          <AlertTriangle className="w-8 h-8 text-museum-gold mb-4 animate-pulse" />
          <h3 className="heading-sm text-museum-white mb-2 uppercase tracking-widest">
            {this.props.fallbackMessage || "Viewport Synchronization Failed"}
          </h3>
          <p className="body-sm text-museum-muted mb-6 max-w-sm">
            The experiment runner encountered an unexpected runtime failure. Archival narrative context remains available below.
          </p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-museum-surface border border-museum-gold hover:bg-museum-surface-elevated text-museum-white label-caps tracking-widest uppercase transition-colors rounded focus-ring flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESTART RUNNER</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
