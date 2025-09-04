const SocialProof = () => {
  const companies = [
    "FinTech Co",
    "SaaS Lab", 
    "DataCore",
    "CloudTech",
    "AutoFlow"
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-lg">
            Trusted by teams at innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={company}
                className="flex items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="px-6 py-3 bg-muted rounded-lg border border-border">
                  <span className="text-muted-foreground font-semibold text-lg">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;