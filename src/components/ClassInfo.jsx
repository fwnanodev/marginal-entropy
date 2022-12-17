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
              Your student will learn about coding and computer science concepts
              through Microsoft's Minecraft Education Curriculum.
            </p>
            <div className="prose mt-5 text-white">
              <p>Class details:</p>
              <ul>
                <li>
                  Completely cost-free. No tuition. No licensing/books fees.
                </li>
                <li>1:3 teacher to student ratio</li>
                <li>
                  An introduction to logic and programming through block-code
                </li>
                <li>
                  A deeper dive into programming languages, depending on student
                  ability and interest
                </li>
                <li>An hour per week, for three months</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
