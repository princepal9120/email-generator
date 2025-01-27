import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EmailFormProps {
  onSubmit: (data: {
    recipientName: string;
    purpose: string;
    keyPoints: string;
  }) => void;
}

export const EmailForm = ({ onSubmit }: EmailFormProps) => {
  const [formData, setFormData] = useState({
    recipientName: "",
    purpose: "",
    keyPoints: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="recipientName">Recipient Name</Label>
        <Input
          id="recipientName"
          placeholder="John Doe"
          value={formData.recipientName}
          onChange={(e) =>
            setFormData({ ...formData, recipientName: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="purpose">Email Purpose</Label>
        <Select
          value={formData.purpose}
          onValueChange={(value) =>
            setFormData({ ...formData, purpose: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select purpose" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Meeting Request">Meeting Request</SelectItem>
            <SelectItem value="Follow Up">Follow Up</SelectItem>
            <SelectItem value="Thank You">Thank You</SelectItem>
            <SelectItem value="Project Update">Project Update</SelectItem>
            <SelectItem value="Introduction">Introduction</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="keyPoints">Key Points</Label>
        <Textarea
          id="keyPoints"
          placeholder="Enter the main points you want to include..."
          value={formData.keyPoints}
          onChange={(e) =>
            setFormData({ ...formData, keyPoints: e.target.value })
          }
          className="min-h-[150px]"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Generate Email
      </Button>
    </form>
  );
};
