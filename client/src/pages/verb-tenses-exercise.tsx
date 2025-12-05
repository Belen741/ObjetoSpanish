import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle, RotateCcw, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  verbTensesPage1, 
  verbTensesPage2, 
  verbTensesPage3,
  type MultipleChoiceExercise,
  type RewriteExercise 
} from "@/data/verbTensesExercises";

type PageType = "1" | "2" | "3";

function MultipleChoicePage({ 
  exercises, 
  pageNum,
  instruction,
  backPath
}: { 
  exercises: MultipleChoiceExercise[]; 
  pageNum: string;
  instruction: string;
  backPath: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;

  const handleCheck = () => {
    if (!selectedOption) return;
    setIsAnswered(true);
    if (selectedOption === current.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Page {pageNum} Complete!</h2>
        <p className="text-xl text-muted-foreground mb-8">
          You scored {score} out of {exercises.length}
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Link href={backPath}>
            <Button>Back to Pages</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Exercise {currentIndex + 1} of {exercises.length}
        </span>
        <span className="text-sm font-medium text-primary">
          Score: {score}/{currentIndex + (isAnswered ? 1 : 0)}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-6" />

      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6">
        <p className="text-secondary font-medium">{instruction}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <div className="mb-6">
          {current.instruction && (
            <p className="text-sm font-medium text-primary mb-2 italic">{current.instruction}</p>
          )}
          <p className="text-xl font-semibold text-foreground">{current.sentence}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-6">
          {current.options.map((option) => {
            let optionClass = "border-border hover:border-primary/50 bg-white";
            if (isAnswered) {
              if (option.id === current.correctAnswer) {
                optionClass = "border-green-500 bg-green-50";
              } else if (option.id === selectedOption) {
                optionClass = "border-red-500 bg-red-50";
              }
            } else if (selectedOption === option.id) {
              optionClass = "border-primary bg-primary/5";
            }

            return (
              <button
                key={option.id}
                onClick={() => !isAnswered && setSelectedOption(option.id)}
                disabled={isAnswered}
                className={`p-4 rounded-xl border-2 text-left transition-all ${optionClass} ${isAnswered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <span className="font-bold text-sm text-muted-foreground mr-2">
                  {option.id.toUpperCase()})
                </span>
                <span className="font-medium">{option.text}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`p-4 rounded-xl mb-6 ${selectedOption === current.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/80">{current.explanation}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!isAnswered ? (
            <Button onClick={handleCheck} disabled={!selectedOption} size="lg">
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              {currentIndex === exercises.length - 1 ? "Finish" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function RewritePage({ exercises, instruction, backPath }: { exercises: RewriteExercise[]; instruction: string; backPath: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;

  const normalizeAnswer = (str: string) => {
    return str.toLowerCase().trim().replace(/[.,;:!?¿¡]/g, "").replace(/\s+/g, " ");
  };

  const checkAnswer = () => {
    const normalized = normalizeAnswer(userAnswer);
    const correct = normalizeAnswer(current.correctAnswer);
    const alt = current.alternativeAnswer ? normalizeAnswer(current.alternativeAnswer) : null;
    return normalized === correct || (alt && normalized === alt);
  };

  const handleCheck = () => {
    if (!userAnswer.trim()) return;
    setIsAnswered(true);
    if (checkAnswer()) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setUserAnswer("");
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswer("");
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Page 2 Complete!</h2>
        <p className="text-xl text-muted-foreground mb-8">
          You scored {score} out of {exercises.length}
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Link href={backPath}>
            <Button>Back to Pages</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isCorrect = checkAnswer();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Exercise {currentIndex + 1} of {exercises.length}
        </span>
        <span className="text-sm font-medium text-primary">
          Score: {score}/{currentIndex + (isAnswered ? 1 : 0)}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-6" />

      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6">
        <p className="text-secondary font-medium">{instruction}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
            {current.tense}
          </span>
          <p className="text-xl font-semibold text-foreground">{current.original}</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isAnswered}
            placeholder="Type your answer here..."
            className={`w-full p-4 rounded-xl border-2 text-lg font-medium transition-colors ${
              isAnswered 
                ? isCorrect 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-red-500 bg-red-50'
                : 'border-border focus:border-primary focus:outline-none'
            }`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isAnswered && userAnswer.trim()) {
                handleCheck();
              }
            }}
          />
        </div>

        {isAnswered && (
          <div className="space-y-3 mb-6">
            {!isCorrect && (
              <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                <p className="text-sm font-medium text-green-800">
                  Correct answer: <span className="font-bold">{current.correctAnswer}</span>
                  {current.alternativeAnswer && (
                    <span className="block mt-1">Alternative: {current.alternativeAnswer}</span>
                  )}
                </p>
              </div>
            )}
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{current.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!isAnswered ? (
            <Button onClick={handleCheck} disabled={!userAnswer.trim()} size="lg">
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              {currentIndex === exercises.length - 1 ? "Finish" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function PageSelector({ onSelect }: { onSelect: (page: PageType) => void }) {
  const pages = [
    { id: "1" as PageType, title: "Page 1", description: "Select the correct form with the pronoun" },
    { id: "2" as PageType, title: "Page 2", description: "Rewrite the sentence in the given tense" },
    { id: "3" as PageType, title: "Page 3", description: "Choose the correct answer" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground mb-6">Choose a page to practice:</h2>
      {pages.map((page) => (
        <button
          key={page.id}
          onClick={() => onSelect(page.id)}
          className="w-full bg-white border-2 border-border hover:border-secondary/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer flex items-center justify-between text-left"
        >
          <div>
            <h3 className="text-lg font-semibold text-foreground">{page.title}</h3>
            <p className="text-muted-foreground text-sm">{page.description}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
        </button>
      ))}
    </div>
  );
}

export default function VerbTensesExercise() {
  const [, params] = useRoute("/practice/exercises/verb-tenses/:page");
  const [selectedPage, setSelectedPage] = useState<PageType | null>(
    (params?.page as PageType) || null
  );

  const backPath = "/practice/exercises/verb-tenses";

  const handleSelectPage = (page: PageType) => {
    setSelectedPage(page);
    window.history.pushState({}, "", `/practice/exercises/verb-tenses/${page}`);
  };

  const handleBack = () => {
    setSelectedPage(null);
    window.history.pushState({}, "", "/practice/exercises/verb-tenses");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        {selectedPage ? (
          <Button variant="ghost" onClick={handleBack} className="mb-6 hover:bg-secondary/10 hover:text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Pages
          </Button>
        ) : (
          <Link href="/practice/exercises">
            <Button variant="ghost" className="mb-6 hover:bg-secondary/10 hover:text-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Exercises
            </Button>
          </Link>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Pronouns in Different Verb Tenses</h1>
          <p className="text-lg text-muted-foreground">
            Practice pronoun placement across various verb tenses
          </p>
        </div>

        {!selectedPage ? (
          <PageSelector onSelect={handleSelectPage} />
        ) : selectedPage === "1" ? (
          <MultipleChoicePage 
            exercises={verbTensesPage1} 
            pageNum="1" 
            instruction="Which is the correct form with the pronoun? Select the answer with correct pronoun placement."
            backPath={backPath}
          />
        ) : selectedPage === "2" ? (
          <RewritePage 
            exercises={verbTensesPage2} 
            instruction="Rewrite each sentence by placing the direct and indirect object pronouns correctly according to the required verb tense."
            backPath={backPath}
          />
        ) : (
          <MultipleChoicePage 
            exercises={verbTensesPage3} 
            pageNum="3" 
            instruction="Choose the correct answer that uses both object pronouns in the correct position according to the verb tense."
            backPath={backPath}
          />
        )}
      </div>
    </div>
  );
}
