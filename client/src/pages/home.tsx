import { Link } from "wouter";
import { BookOpen, BrainCircuit } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-foreground tracking-tight">
            Spanish Objects <span className="text-primary">Mastery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understand the logic behind Direct and Indirect Object Pronouns.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Learn Button */}
          <Link href="/learn">
            <div className="group cursor-pointer bg-white border-2 border-border hover:border-primary/50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 relative overflow-hidden"
                 data-testid="card-learn">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-32 h-32 text-primary -rotate-12" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  Learn
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Learn how Spanish direct and indirect objects work
                </p>
                
                <div className="mt-auto pt-8 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Start Lesson <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Practice Button */}
          <Link href="/practice">
            <div className="group cursor-pointer bg-white border-2 border-border hover:border-secondary/50 rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1 relative overflow-hidden"
                 data-testid="card-practice">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <BrainCircuit className="w-32 h-32 text-secondary -rotate-12" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                  Practice
                </h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  Master direct and indirect objects through practice
                </p>
                
                <div className="mt-auto pt-8 flex items-center text-secondary font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Start Quiz <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
