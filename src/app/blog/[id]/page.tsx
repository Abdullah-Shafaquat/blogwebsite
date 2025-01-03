"use client";
import { useEffect, useState } from "react";
import CommitSection from "@/app/components/comment";
import { useSearchParams } from "next/navigation"; // Import useSearchParams hook
import Image from "next/image";

// Types for blog data
interface SubSection {
  subHeading?: string;
  paragraph?: string;
}

interface Section {
  heading1?: string;
  paragraph1?: string;
  image?: string;
  heading?: string;
  paragraph?: string;
  subSections?: SubSection[];
}

interface Blog {
  title: string;
  author: string;
  date: string;
  content: Section[];
  conclusion: string;
}

export default function Product() {
  const searchParams = useSearchParams(); // Get the query params using useSearchParams
  const id = searchParams.get("id"); // Access the "id" from the query parameters
  const [blog, setBlog] = useState<Blog | null>(null); // State to store blog data
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading state

  useEffect(() => {
    // Fetch blog data based on the ID when the component mounts
    const fetchBlogData = async () => {
      if (!id) return; // Handle case where ID is missing

      try {
        const res = await fetch(`https://vercel.com/muhammad-abdullahs-projects-750ea1d4/blogwebsite?id=${id}`);
        const data: Blog = await res.json(); // Type the fetched data
        setBlog(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetcheds
      }
    };

    fetchBlogData(); // Call the function to fetch the data
  }, [id]); // Dependency on `id` to trigger effect when the ID changes

  // Show loading state while data is being fetched
  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  // Handle case if the blog data is not available
  if (!blog) {
    return <div className="text-center text-xl text-gray-600">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-wide mb-6">{blog.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          <strong className="font-semibold">{blog.author}</strong> | {blog.date}
        </p>

        {/* Content sections */}
        {blog.content.map((section, index) => (
          <div key={index} className="mb-8">
            {section.heading1 && <h2 className="text-3xl font-semibold text-gray-800 mb-4">{section.heading1}</h2>}
            {section.paragraph1 && <p className="text-lg text-gray-700 leading-relaxed mb-6">{section.paragraph1}</p>}
            {section.image && (
              <div className="mb-6">
                <Image className="w-full h-auto rounded-xl shadow-lg" width={1200} height={800} src={section.image} alt={section.heading1 || "Blog Image"} />
              </div>
            )}
            {section.heading && <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>}
            {section.paragraph && <p className="text-lg text-gray-700 leading-relaxed mb-6">{section.paragraph}</p>}

            {/* Subsections */}
            {section.subSections &&
              section.subSections.map((subSection, subIndex) => (
                <div key={subIndex} className="pl-6 border-l-4 border-gray-300 mt-4">
                  {subSection.subHeading && <h3 className="text-xl font-medium text-gray-700 mb-2">{subSection.subHeading}</h3>}
                  {subSection.paragraph && <p className="text-gray-600 text-lg leading-relaxed">{subSection.paragraph}</p>}
                </div>
              ))}
          </div>
        ))}

        {/* Conclusion */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{blog.conclusion}</p>
        </div>
      </div>

      {/* Comment Section */}
      <CommitSection />
    </div>
  );
}
