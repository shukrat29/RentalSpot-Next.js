// single individual property page

import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();
  return (
    <>
      <section>
        <Image
          src={property.images[0]}
          className="object-cover h-[400px] w-full"
          height={0}
          width={0}
          sizes="100vw"
          alt="pic"
        />
      </section>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-green-600 hover:text-green-700 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {/* Property Info */}
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
