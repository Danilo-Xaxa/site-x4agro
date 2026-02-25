import React from 'react';

const SectionSkeleton = () => (
  <div className="py-20 lg:py-28 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-16 gap-4">
        <div className="h-10 bg-gray-200 rounded-lg w-2/3 max-w-lg" />
        <div className="h-5 bg-gray-200 rounded w-1/2 max-w-sm" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-200 rounded-2xl h-48" />
        ))}
      </div>
    </div>
  </div>
);

export default SectionSkeleton;
