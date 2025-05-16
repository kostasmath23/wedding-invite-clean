import React from "react";
import {
  FaHandshake,
  FaHeart,
  FaHome,
  FaGem,
  FaEnvelope,
} from "react-icons/fa";

const events = [
  {
    icon: <FaHandshake className="text-white text-3xl" />,
    title: "Πρώτη Γνωριμία",
    date: "01.06.2020",
  },
  {
    icon: <FaHeart className="text-white text-3xl" />,
    title: "Ερωτευτήκαμε",
    date: "15.07.2020",
  },
  {
    icon: <FaHome className="text-white text-3xl" />,
    title: "Συγκατοίκηση",
    date: "01.03.2021",
  },
  {
    icon: <FaGem className="text-white text-3xl" />,
    title: "Πρόταση Γάμου",
    date: "25.12.2023",
  },
  {
    icon: <FaEnvelope className="text-white text-3xl" />,
    title: "Γάμος!",
    date: "21.08.2028",
  },
];

export default function Timeline() {
  return (
    <section
      className="py-32 px-6 md:px-12 text-white overflow-hidden"
      style={{ backgroundColor: "rgb(30,25,22)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Timeline list */}
        <div className="w-full md:w-2/3 space-y-16">
          {events.map((event, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="bg-[#6c4c1c] p-5 rounded-full shadow-lg">
                {event.icon}
              </div>
              <div>
                <h3 className="text-4xl font-serif mb-1">{event.title}</h3>
                <p className="text-2xl text-gray-300">{event.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <img
            src="/images/timeline.png"
            alt="timeline"
            className="w-2/3 max-w-[250px] md:w-[250px] h-auto animate-pulse md:translate-x-24 translate-x-0"
          />
        </div>
      </div>
    </section>
  );
}
