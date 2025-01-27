import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface EmailDisplayProps {
  email: string;
}

export const EmailDisplay = ({ email }: EmailDisplayProps) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Copied to clipboard",
        description: "Email content has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Generated Email</h2>
        <Button
          onClick={handleCopy}
          variant="outline"
          disabled={!email}
          className="ml-2"
        >
          Copy to Clipboard
        </Button>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 min-h-[300px] whitespace-pre-wrap font-mono text-sm">
        {email || "Your generated email will appear here..."}
      </div>
    </div>
  );
};
