import { Link } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const exercises = [
  {
    id: 1,
    title: "Direct object practice",
    description: "me, te, lo, la, las, los, nos",
    href: "/practice/exercises/direct-object",
  },
  {
    id: 2,
    title: "Indirect object practice",
    description: "me, te, le, les, nos",
    href: "/practice/exercises/indirect-object",
  },
  {
    id: 3,
    title: "Practice using direct and indirect objects in the same sentence",
    description: "Combine both object types",
    href: "/practice/exercises/combined-objects",
  },
  {
    id: 4,
    title: "Practice using direct and indirect objects in the same sentence (with se)",
    description: "When le/les becomes se",
    href: "/practice/exercises/combined-objects-se",
  },
  {
    id: 5,
    title: "Use them in different verb tenses",
    description: "Apply object pronouns across tenses",
    href: "/practice/exercises/verb-tenses",
  },
];

export default function Exercises() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/practice">
          <Button variant="ghost" className="mb-6 hover:bg-secondary/10 hover:text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Practice
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">All Exercises</h1>
          <p className="text-lg text-muted-foreground">
            Choose a topic to practice your skills.
          </p>
        </div>

        <div className="space-y-4">
          {exercises.map((exercise) => (
            <Link key={exercise.id} href={exercise.href}>
              <div 
                className="group bg-white border-2 border-border hover:border-secondary/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-between"
                data-testid={`link-exercise-${exercise.id}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center font-bold shrink-0">
                    {exercise.id}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {exercise.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {exercise.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
