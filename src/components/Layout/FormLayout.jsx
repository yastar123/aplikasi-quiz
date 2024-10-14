import React from "react";

const FormLayout = ({ title, subtitle, children }) => (
    <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">{title}</h3>
                <p className="mt-1.5 text-lg font-medium text-white/50">{subtitle}</p>
            </div>
            <div className="p-6 pt-0">{children}</div>
        </div>
    </div>
);

export default FormLayout;
