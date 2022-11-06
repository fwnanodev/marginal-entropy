import minecraftCode from "./images/Coding_Desktop.png";

export default function ClassInfo() {
  return (
    <div className="relative bg-blue">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="w-full object-cover lg:absolute lg:h-full"
            src={minecraftCode}
            alt=""
          />
        </div>
      </div>
      <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">
          <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3 className="mt-2 text-4xl font-bold leading-8 tracking-wider text-white">
              Free Minecraft Coding Class
            </h3>
            <p className="mt-8 text-white">
              We leverage Microsoft's Minecraft Education Curriculum to teach
              students coding and computer science concepts.
            </p>
            <div className="prose mt-5 text-white">
              <p>
                We start the class with block code, introducing students to
                logic and core programming concepts.
              </p>
              <p>
                As the students advance their knowledge and express interest, we
                will split into three specialized learning groups. One will stay
                focused on block-code, and the other classes will introduce
                JavaScript and Python.
              </p>
              <p>
                We will meet one hour per week for three months. At the end of
                the course, we hope that students will walk away with a
                foundation in programming, preparing them to pursue further
                education or a career in technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
