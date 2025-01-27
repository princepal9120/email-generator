import React, { useState } from "react";
import { generateEmail } from "@/lib/gemini";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EmailForm = ({ onEmailGenerated }) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [keyPoints, setKeyPoints] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = await generateEmail(name, purpose, keyPoints);
      onEmailGenerated(email);
    } catch (error) {
      console.error("Error generating email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Purpose
        </label>
        <Select value={purpose} onValueChange={setPurpose} required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select email purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="job-application">Job Application</SelectItem>
            <SelectItem value="business-proposal">Business Proposal</SelectItem>
            <SelectItem value="meeting-request">Meeting Request</SelectItem>
            <SelectItem value="follow-up">Follow Up</SelectItem>
            <SelectItem value="thank-you">Thank You</SelectItem>
            <SelectItem value="introduction">Introduction</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Key Points
        </label>
        <textarea
          value={keyPoints}
          onChange={(e) => setKeyPoints(e.target.value)}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-bold py-2 rounded-md ${
          loading ? "opacity-50" : ""
        }`}
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </form>
  );
};

export default EmailForm;
