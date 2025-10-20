import RoadmapsSection from "./RoadmapsSection";
import TechnologiesSection from "./TechnologiesSection";

export default function ResourceHub() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Learning Hub
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Explore curated learning paths and technologies.
      </p>

      <RoadmapsSection />
      <TechnologiesSection />
    </div>
  );
}
