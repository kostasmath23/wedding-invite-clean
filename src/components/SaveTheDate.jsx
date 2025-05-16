import React from 'react';
import { FaCalendarCheck } from 'react-icons/fa';
import { Parallax } from 'react-scroll-parallax';

export default function SaveTheDate() {
  return (
    <section className="bg-[#eae6df] py-64 px-4 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-start">

        {/* Αριστερά: flower + deco με πιο έντονο parallax */}
        <div className="w-full md:w-[calc(50%-160px)] flex flex-row items-start gap-10">
          <Parallax translateY={[80, -80]} className="w-80 h-auto">
            <img
              src="/images/flower.png"
              alt="flower"
              className="w-80 h-auto"
            />
          </Parallax>

          <Parallax translateY={[-80, 80]} className="w-96 h-auto">
            <img
              src="/images/deco.png"
              alt="decoration"
              className="w-96 h-auto"
            />
          </Parallax>
        </div>

        {/* Κενό για στοίχιση */}
        <div className="hidden md:block w-80" />

        {/* Δεξιά: Κείμενο */}
        <div className="w-full md:w-[calc(50%-160px)] flex flex-col items-start text-left gap-8">
          <h2 className="text-6xl md:text-7xl font-serif">Save The Date</h2>
          <p className="text-7xl md:text-8xl font-extrabold tracking-wide">27.09.2025</p>
          <FaCalendarCheck className="text-6xl" />
        </div>
      </div>
    </section>
  );
}
