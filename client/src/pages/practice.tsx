import { Link } from "wouter";
import { ArrowLeft, PlayCircle, List } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Practice() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-6 hover:bg-secondary/10 hover:text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="w-full max-w-md space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground">Ready to Practice?</h1>
              <p className="text-muted-foreground text-lg">Test your knowledge of direct and indirect objects.</p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Try the test Button */}
              <Link href="/practice/test">
                <Button 
                  size="lg" 
                  className="w-full h-16 text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-2xl"
                  data-testid="button-try-test"
                >
                  <PlayCircle className="mr-3 h-6 w-6" />
                  Try the test
                </Button>
              </Link>

              {/* View all exercises Link */}
              <Link href="/practice/exercises">
                <Button 
                  variant="ghost" 
                  className="w-full h-12 text-lg text-muted-foreground hover:text-secondary hover:bg-secondary/5"
                  data-testid="link-view-exercises"
                >
                  <List className="mr-2 h-5 w-5" />
                  View all exercises
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
