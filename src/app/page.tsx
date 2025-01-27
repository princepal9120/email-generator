"use client";
import { useState } from "react";
import EmailForm from "@/components/EmailForm";
import { EmailDisplay } from "@/components/EmailDisplay";

const Index = () => {
  const [generatedEmail, setGeneratedEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Email Template Generator
          </h1>
          <p className="mt-2 text-slate-600">
            Generate professional emails in seconds
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <EmailForm onEmailGenerated={setGeneratedEmail} />
        </div>

        <EmailDisplay email={generatedEmail} />
      </div>
    </div>
  );
};

export default Index;
