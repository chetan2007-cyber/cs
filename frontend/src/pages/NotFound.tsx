import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white">
      <div className="surface-card p-8 sm:p-12 border border-zinc-200 max-w-md w-full text-center space-y-6">
        <div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 mx-auto flex items-center justify-center font-mono font-bold text-zinc-900 text-sm">
          404
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
            PAGE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-950">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            The page you are looking for does not exist or has been moved. Check the URL or return to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg font-semibold text-xs text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 transition-colors flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
