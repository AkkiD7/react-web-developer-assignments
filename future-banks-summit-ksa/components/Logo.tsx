import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-0.5">
          <div className="w-4 h-4 bg-brand-accent transform -skew-x-12 rounded-sm"></div>
          <div className="w-4 h-4 bg-brand-blue transform -skew-x-12 rounded-sm"></div>
        </div>
        <div className="flex gap-0.5 ml-2">
           <div className="w-4 h-4 bg-gray-500 transform -skew-x-12 rounded-sm"></div>
           <div className="w-4 h-4 bg-brand-blue transform -skew-x-12 rounded-sm"></div>
        </div>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">4th Annual</span>
        <span className="text-xl font-bold text-slate-800 tracking-tight">future<span className="font-light text-slate-600">banks</span></span>
        <span className="text-sm font-bold text-slate-900 tracking-widest uppercase">summit</span>
      </div>
    </div>
  );
};

export default Logo;