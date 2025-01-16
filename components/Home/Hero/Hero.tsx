"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import Image from "next/image";


const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageGeneration = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    const options = {
      method: "POST",
      url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
      headers: {
        "x-rapidapi-key": "217ec0cf94msh329a646b90c2d00p1b66a0jsnbd8597669c78",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: { inputs: prompt },
    };

    try {
      const response = await axios.request(options);
      setImage(response?.data?.url);
      toast.success("Image generated successfully!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message || "Failed to generate image.");
      } else {
        toast.error("An unexpected error occurred!");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadImage = () => {
    if (!image) return;

    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "generated-image.jpg";
    link.click();
  };

  return (
    <div className="w-[95%] min-h-screen relative mx-auto pt-[20vh]">
      <div className="relative z-10 text-white flex flex-col items-center justify-center">
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center bg-gradient-to-r from-orange-300 to-purple-600 text-transparent bg-clip-text"
        >
          Unleash Creativity with AI-Generated Art
          <br />
          Transform Ideas into Stunning Images Instantly
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-sm md:text-base font-semibold text-center text-gray-300"
        >
          Turn your imagination into vibrant artwork with just a few clicks.
        </p>

        <div className="h-12 md:h-16 w-full sm:w-[90%] md:w-[80%] lg:w-[73%] xl:w-[65%] bg-white rounded-lg mt-12 px-4 sm:px-6 flex items-center justify-between">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            aria-label="Enter prompt for AI image generation"
            className="h-full rounded-lg outline-none w-full text-black block flex-1 placeholder:text-xs sm:placeholder:text-base px-4 sm:px-6"
            required
          />
          <Button
            variant={"default"}
            size={"sm"}
            onClick={handleImageGeneration}
            className="sm:w-full md:w-auto"
            disabled={loading || !prompt.trim()}
          >
            {loading ? "Generating..." : "Generate"}
          </Button>
        </div>

        <div className="flex items-center mt-6 space-x-4 flex-wrap">
          <p className="mt-[1rem]">Trending Tags:</p>
          {["Digital Art", "Fantasy", "Abstract", "Cyberpunk", "Nature", "3D Render", "Surreal"].map(
            (tag, idx) => (
              <Button key={idx} variant={"secondary"} onClick={() => setPrompt(tag)}>
                {tag}
              </Button>
            )
          )}
        </div>

        {loading && (
          <div role="alert" aria-live="assertive" className="mt-6">
            <Loader className="animate-spin text-white w-8 h-8" />
          </div>
        )}

        {image && (
          <div className="mt-8 flex flex-col items-center">
            <Image 
                src={image} 
                alt={`Generated image for prompt "${prompt}"`} 
                width={500} 
                height={500} 
                className="max-w-full h-[500px] rounded-lg shadow-lg" 
                />
            <Button onClick={handleDownloadImage} className="mt-4 mb-4 bg-orange-400 hover:bg-purple-800">
              Download
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
