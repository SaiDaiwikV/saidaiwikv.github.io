import React from "react";
import { codingProfiles } from "@/data";

const CodingProfiles = () => {
  return (
    <div className="py-20 w-full" id="code">
      <h1 className="heading">
        My <span className="text-purple">coding profiles</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-12">
        {codingProfiles.map((profile) => (
          <div
            key={profile.id}
            className="group rounded-3xl border border-white/[0.1] bg-black-100 p-3 flex flex-col hover:border-purple/40 transition-colors duration-300"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0d20]">
              <img
                src={profile.image}
                alt={`${profile.name} stats`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="px-4 pt-5 pb-4 flex flex-col items-center gap-4 flex-1">
              <p className="text-white-200 text-sm text-center leading-relaxed">
                {profile.description}
              </p>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-2 rounded-full border border-purple/50 bg-[#161a35] text-white font-semibold text-sm hover:bg-purple hover:text-black hover:border-transparent transition-all"
              >
                Visit {profile.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfiles;
