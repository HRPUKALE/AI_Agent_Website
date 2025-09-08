const SocialProof = () => {
  const companies = [
    "FinTech Co",
    "SaaS Lab", 
    "DataCore",
    "CloudTech",
    "AutoFlow",
    "TechFlow",
    "DataSync",
    "CloudCore",
    "AutoScale",
    "FinCore"
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 mb-8 text-lg font-medium">
            Trusted by teams at innovative companies
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient fade effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-50/30 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-50/30 to-transparent z-10"></div>
            
            <div className="flex animate-scroll gap-6 md:gap-8">
              {/* First set of companies */}
              {companies.map((company, index) => (
                <div
                  key={`first-${company}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
                    <span className="text-gray-700 font-semibold text-base whitespace-nowrap group-hover:text-gray-900 transition-colors">
                      {company}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${company}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 group">
                    <span className="text-gray-700 font-semibold text-base whitespace-nowrap group-hover:text-gray-900 transition-colors">
                      {company}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;