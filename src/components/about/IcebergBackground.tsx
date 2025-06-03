
import React from 'react';

export const IcebergBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Sky Layer with Arctic Feel */}
      <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-slate-100 via-blue-50 to-blue-100"></div>
      
      {/* Ocean Surface with Realistic Water Effect */}
      <div className="absolute top-1/3 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-90">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-gentle-float"></div>
      </div>
      
      {/* Upper Ocean - Lighter Blue */}
      <div className="absolute top-1/3 w-full h-1/4 bg-gradient-to-b from-iceberg-blue via-blue-400 to-blue-500"></div>
      
      {/* Mid Ocean - Medium Blue */}
      <div className="absolute top-7/12 w-full h-1/4 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700"></div>
      
      {/* Deep Ocean - Darker Blue */}
      <div className="absolute bottom-1/6 w-full h-1/4 bg-gradient-to-b from-blue-700 via-blue-800 to-blue-900"></div>
      
      {/* Ocean Floor - Realistic Deep Sea */}
      <div className="absolute bottom-0 w-full h-1/6 bg-gradient-to-b from-blue-900 via-slate-800 to-slate-900"></div>
      
      {/* Floating Ice Particles - More Realistic */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full animate-gentle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
