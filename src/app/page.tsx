"use client";
import { useState } from "react";
import { EmailForm } from "@/components/EmailForm";
import { EmailDisplay } from "@/components/EmailDisplay";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [generatedEmail, setGeneratedEmail] = useState("");
  const { toast } = useToast();

  const handleEmailGeneration = async (formData: {
    recipientName: string;
    purpose: string;
    keyPoints: string;
  }) => {
    try {
      const emailContent = `Dear ${formData.recipientName},\n\nI hope this email finds you well. I am writing regarding ${formData.purpose}.\n\n${formData.keyPoints}\n\nBest regards,\n[Your name]`;

      setGeneratedEmail(emailContent);
      toast({
        title: "Email generated successfully!",
        description: "You can now copy and use your email.",
      });
    } catch (error) {
      toast({
        title: "Error generating email",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Email Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate perfect emails in seconds
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <EmailForm onSubmit={handleEmailGeneration} />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <EmailDisplay email={generatedEmail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
