import { Link, useRoute } from "wouter";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

const exerciseTitles: Record<string, string> = {
  "direct-object": "Direct Object Practice",
  "indirect-object": "Indirect Object Practice",
  "combined-objects": "Direct and Indirect Objects in the Same Sentence",
  "combined-objects-se": "Direct and Indirect Objects with Se",
  "different-tenses": "Use Them in Different Verb Tenses",
};

export default function ExercisePlaceholder() {
  const [, params] = useRoute("/practice/exercises/:type");
  const type = params?.type || "";
  const title = exerciseTitles[type] || "Exercise";

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice/exercises">
          <Button variant="ghost" className="mb-6 hover:bg-secondary/10 hover:text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Exercises
          </Button>
        </Link>

        <div className="bg-white rounded-3xl p-12 border border-border shadow-sm text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            This exercise module is coming soon. Check back later for practice content!
          </p>
        </div>
      </div>
    </div>
  );
}
