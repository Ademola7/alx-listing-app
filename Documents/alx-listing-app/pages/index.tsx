import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">
        Welcome to ALX Listing App
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Modern Apartment"
          description="A cozy apartment in the city center."
          image="/assets/placeholder1.jpg"
        />
        <Card
          title="Luxury Villa"
          description="Spacious villa with pool and ocean view."
          image="/assets/placeholder2.jpg"
        />
      </div>

      <div className="text-center mt-10">
        <Button label="Explore More" onClick={() => alert("Coming soon!")} />
      </div>
    </div>
  );
}
