"use client";

import React from "react";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-purple">Testimonials</span>
          </h2>
          <p className="text-white-100 text-lg max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={index}
              className="bg-black-100 border border-white/[0.1] rounded-xl p-6 hover:border-purple/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-white-200 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-white-100 leading-relaxed text-sm">
                "{testimonial.quote.slice(0, 150)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
