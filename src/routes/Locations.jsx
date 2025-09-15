import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Locations() {
  const locations = [
    {
      city: "Bronx",
      state: "NY",
      address: "Fordham Road, Bronx, NY 10458",
      email: "Bronx@brimhideleather.co",
      hours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "Closed",
      },
      image: "/products/brkSrore.jpg",
      description:
        "Our flagship store and workshop where it all began. Visit to see our artisans at work and shop our full collection.",
    },
    {
      city: "Austin",
      state: "TX",
      address: "Austin, TX 78704",

      email: "austin@brimhideleather.co",
      hours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "10:00 AM - 6:00 PM",
        sunday: "Closed",
      },
      image: "/products/sroreImgAux.jpg",
      description:
        "Our Austin location features a workshop specializing in custom belts and accessories, with regular leather crafting workshops.",
    },
    {
      city: "Portland",
      state: "OR",
      address: "Portland, OR 97214",

      email: "portland@brimhideleather.co",
      hours: {
        monday: "10:00 AM - 6:00 PM",
        tuesday: "10:00 AM - 6:00 PM",
        wednesday: "10:00 AM - 6:00 PM",
        thursday: "10:00 AM - 6:00 PM",
        friday: "10:00 AM - 6:00 PM",
        saturday: "11:00 AM - 5:00 PM",
        sunday: "Closed",
      },
      image: "/products/Orstoreimg.jpg",
      description:
        "Our newest location showcases our full collection with a focus on jackets and bags, featuring local Portland leather artisans.",
    },
  ];

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Visit Our Stores
        </h1>
        <p className="text-xl text-gray-600">
          Experience our craftsmanship in person at one of our workshop
          locations.
        </p>
      </div>

      <div className="space-y-16">
        {locations.map((location, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            id={location.city.toLowerCase()}
          >
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={location.image}
                alt={`${location.city} store`}
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-2">
                {location.city}, {location.state}
              </h2>
              <div className="w-16 h-1 bg-saddle-tan mb-6"></div>

              <p className="mb-6 text-gray-600">{location.description}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-deep-brown mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{location.address}</span>
                </div>

                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-deep-brown mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{location.email}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-3">Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday</div>
                  <div>{location.hours.monday}</div>
                  <div>Tuesday</div>
                  <div>{location.hours.tuesday}</div>
                  <div>Wednesday</div>
                  <div>{location.hours.wednesday}</div>
                  <div>Thursday</div>
                  <div>{location.hours.thursday}</div>
                  <div>Friday</div>
                  <div>{location.hours.friday}</div>
                  <div>Saturday</div>
                  <div>{location.hours.saturday}</div>
                  <div>Sunday</div>
                  <div>{location.hours.sunday}</div>
                </div>
              </div>

              <Button to="/contact" variant="outline">
                Contact This Location
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Tours */}
      <div className="mt-16 bg-bone rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Workshop Tours</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Interested in seeing how our products are made? We offer guided
          workshop tours at all of our locations. Learn about our process, meet
          our artisans, and see the craftsmanship that goes into each piece.
        </p>
        <Button to="/contact" variant="primary">
          Schedule a Tour
        </Button>
      </div>
    </div>
  );
}
