import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeDBackground from "@/components/ThreeDBackground";
import BlogsHero from "@/components/BlogsHero";
import VideoSection from "@/components/VideoSection";
import {
  problemVideos,
  africaVideos,
  solutionsVideos,
  conferencesVideos,
} from "@/data/videoData";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-psyc-darkest text-white relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10">
        <Navbar />

        <BlogsHero />

        {/* Problem Section - India */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: India
            </h2>

            <VideoSection
              title="Karnataka"
              videos={problemVideos.india.karnataka}
              region="Karnataka"
            />
            <VideoSection
              title="Kerala"
              videos={problemVideos.india.kerala}
              region="Kerala"
            />
            <VideoSection
              title="Assam"
              videos={problemVideos.india.assam}
              region="Assam"
            />
            <VideoSection
              title="Maharashtra"
              videos={problemVideos.india.maharashtra}
              region="Maharashtra"
            />
            <VideoSection
              title="Madhya Pradesh"
              videos={problemVideos.india.madhyaPradesh}
              region="Madhya Pradesh"
            />
            <VideoSection
              title="Odisha"
              videos={problemVideos.india.odisha}
              region="Odisha"
            />
          </div>
        </section>

        {/* Problem Section - China & Africa */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Problem: International
            </h2>

            <VideoSection
              title="China"
              videos={problemVideos.china}
              region="China"
            />
            <VideoSection
              title="Africa"
              videos={africaVideos}
              region="Africa"
            />
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Solutions & Innovations
            </h2>
            <VideoSection
              title=""
              videos={solutionsVideos}
              region="Solutions"
              className="mb-0"
            />
          </div>
        </section>

        {/* Conferences Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industry Conferences & Discussions
            </h2>
            <VideoSection
              title=""
              videos={conferencesVideos}
              region="Conference"
              className="mb-0"
            />
          </div>
        </section>
        {/* Idea Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> Our Idea AI Movie </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="w-full">
                <video 
                  controls
                  muted
                  className="w-full h-full rounded-lg shadow-lg"
                >
                  <source src="/videos/idea.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
