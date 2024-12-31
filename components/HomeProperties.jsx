import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="px-4 py6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h3 className="text-xl font-bold text-green-700 mb-3 text-center">
            Recent Properties
          </h3>
          {recentProperties.length === 0 ? (
            <p>No property fouund</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-lg"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
