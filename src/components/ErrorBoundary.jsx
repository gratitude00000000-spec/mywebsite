import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-white/60 mb-4">ページの読み込み中にエラーが発生しました。</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="text-amber-400 hover:underline text-sm"
          >
            再読み込み
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}
