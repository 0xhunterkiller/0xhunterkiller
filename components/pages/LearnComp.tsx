import WisdomCarousel from "@/components/learn/WisdomCarousel";
import ResourceHub from "@/components/learn/ResourceHub";
import InspirationsHub from "@/components/learn/InspirationsHub";

export default function Learn() {
  return (
    <main className="min-h-screen flex flex-col items-center py-20 px-6 md:px-16 text-gray-200 space-y-16 w-full max-w-6xl">
      {/* Header */}
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent mb-3">
          Learn
        </h1>
        <p className="text-gray-300 text-lg">
          Curated wisdom, resources, and content to help you grow as a
          Software Engineer.
        </p>
      </section>

      {/* Section 1: Words of Wisdom */}
      <WisdomCarousel />

      {/* Section 2: Resource Hub */}
      <ResourceHub />
    
      {/* Section 3: Inspirations Grid */}
      <InspirationsHub />

    </main>
  );
}
