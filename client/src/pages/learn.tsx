import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Learn() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm">
          <h1 className="text-4xl font-bold mb-6 text-primary">Direct & Indirect Objects</h1>
          <p className="text-xl text-muted-foreground">
            Lesson content will go here. This is a placeholder for the learning module.
          </p>
        </div>
      </div>
    </div>
  );
}
