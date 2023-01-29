const supportLinks = [
  {
    name: "Accessability",
    href: "#",
    description:
      "We are providing a completely cost-free coding class, based on Microsoft's Minecraft Education curriculum. We will also provide laptops for any students who do not have access to the required hardware.",
    // icon: PhoneIcon,
  },
  {
    name: "Education",
    href: "#",
    description:
      "We are providing technical education to students in marginalized communities that will prepare them for careers in technology. We will focus on introductory computer science topics, providing students with a foundation in logic and programming.",
    // icon: LifebuoyIcon,
  },
  {
    name: "Empathy",
    href: "#",
    description:
      "We believe that the diversity gap and  mistreatment of marginalized communities in technology comes from a lack of understanding, not malicious intent. We will address that through creating an environment of empathy and communication. Equipping students with the tools to treat others and themselves with kindness and empathy.",
    // icon: NewspaperIcon,
  },
];

export default function MissionHero() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32">
        <div className="absolute inset-0 bg-siennaRed">
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Our Mission
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We are working towards remedying the diversity gap in technology
            through accessibility, education, and empathy.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <h3 className="text-2xl font-bold text-blue">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
