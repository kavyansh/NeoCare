import React from "react";

export default function WelcomeSection() {
  return (
    <section className="flex justify-center w-10/12 gap-4 py-32 items-top">
      <div>
        <h2 className="text-5xl font-bold font-spectral text-primary-gray ">
          Welcome to Neocare
          <br />
        </h2>
        <p className="font-normal font-spectral text-primary-orange leading-[60.88px] text-[40px] mt-[-12px]">
          Orofacial Pain Relief Center
        </p>
        <p>
          Your trusted destination for orofacial pain relief and dental
          wellness.
        </p>
      </div>
      <iframe
        className="rounded-md h-[250px] aspect-video"
        src="https://www.youtube.com/embed/M9iK7OaM7cU?si=yEJAiJdZ71ZsU4xs?modestbranding=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}
