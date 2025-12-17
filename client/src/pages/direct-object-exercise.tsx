import { useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  directObjectPage1, 
  directObjectPage2, 
  directObjectPage3,
  directObjectPage4,
  type MultipleChoiceExercise,
  type RewriteExercise,
  type FillInStoryExercise 
} from "@/data/directObjectExercises";

type PageType = "1" | "2" | "3" | "4";

function MultipleChoicePage({ 
  exercises, 
  pageNum,
  instruction 
}: { 
  exercises: MultipleChoiceExercise[]; 
  pageNum: string;
  instruction: string;
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
          <Link href="/practice/exercises/direct-object">
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
          <p className="text-xl font-semibold text-foreground mb-2">{current.sentence}</p>
          {current.blank && (
            <p className="text-lg text-primary font-medium">{current.blank}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
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

function RewritePage({ exercises, instruction }: { exercises: RewriteExercise[]; instruction: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasEvaluated, setHasEvaluated] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];
  const progress = ((currentIndex) / exercises.length) * 100;

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleSelfEvaluate = (correct: boolean) => {
    setHasEvaluated(true);
    if (correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setUserAnswer("");
      setShowAnswer(false);
      setHasEvaluated(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserAnswer("");
    setShowAnswer(false);
    setHasEvaluated(false);
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
          <Link href="/practice/exercises/direct-object">
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
          Score: {score}/{currentIndex}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-6" />

      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6">
        <p className="text-secondary font-medium">{instruction}</p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <p className="text-xl font-semibold text-foreground mb-6">{current.original}</p>

        <div className="mb-6">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={showAnswer}
            placeholder="Type your answer here..."
            className={`w-full p-4 rounded-xl border-2 text-lg font-medium transition-colors ${
              showAnswer 
                ? 'border-primary/50 bg-primary/5' 
                : 'border-border focus:border-primary focus:outline-none'
            }`}
          />
        </div>

        {showAnswer && (
          <div className="space-y-3 mb-6">
            <div className="p-4 rounded-xl bg-green-50 border border-green-200">
              <p className="text-sm font-medium text-green-800">
                Correct answer: <span className="font-bold">{current.correctAnswer}</span>
                {current.alternativeAnswer && (
                  <span className="block mt-1">Alternative: {current.alternativeAnswer}</span>
                )}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">{current.explanation}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!showAnswer ? (
            <Button onClick={handleShowAnswer} size="lg">
              See Correct Answer
            </Button>
          ) : !hasEvaluated ? (
            <>
              <p className="text-sm text-muted-foreground self-center mr-2">How did you do?</p>
              <Button 
                onClick={() => handleSelfEvaluate(false)} 
                variant="outline"
                size="lg"
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                I got it wrong
              </Button>
              <Button 
                onClick={() => handleSelfEvaluate(true)} 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                I got it right
              </Button>
            </>
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

function FillInStoryPage({ 
  exercises 
}: { 
  exercises: FillInStoryExercise[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const current = exercises[currentIndex];
  const blanks = current.segments.filter(s => s.isBlank);
  const progress = ((currentIndex) / exercises.length) * 100;

  const handleSelectAnswer = (blankIndex: number, value: string) => {
    if (isChecked) return;
    setAnswers(prev => ({ ...prev, [blankIndex]: value }));
  };

  const handleCheck = () => {
    let correct = 0;
    let blankIdx = 0;
    current.segments.forEach((seg) => {
      if (seg.isBlank) {
        if (answers[blankIdx] === seg.correctAnswer) {
          correct++;
        }
        blankIdx++;
      }
    });
    setScore(s => s + correct);
    setIsChecked(true);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(i => i + 1);
      setAnswers({});
      setIsChecked(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsChecked(false);
    setScore(0);
    setIsFinished(false);
  };

  const totalBlanks = exercises.reduce((acc, ex) => acc + ex.segments.filter(s => s.isBlank).length, 0);

  if (isFinished) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Page 4 Complete!</h2>
        <p className="text-xl text-muted-foreground mb-8">
          You got {score} out of {totalBlanks} blanks correct
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleRestart}>
            <RotateCcw className="mr-2 h-4 w-4" /> Try Again
          </Button>
          <Link href="/practice/exercises/direct-object">
            <Button>Back to Pages</Button>
          </Link>
        </div>
      </div>
    );
  }

  const allAnswered = blanks.every((_, idx) => answers[idx] !== undefined && answers[idx] !== "");

  let blankCounter = 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Exercise {currentIndex + 1} of {exercises.length}
        </span>
        <span className="text-sm font-medium text-primary">
          Blanks correct: {score}
        </span>
      </div>
      <Progress value={progress} className="h-2 mb-6" />

      <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-4 mb-6">
        <p className="text-secondary font-medium">Select the correct direct object pronoun for each blank.</p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <h3 className="text-xl font-bold text-foreground mb-4">{current.title}</h3>
        
        <div className="text-lg leading-relaxed mb-6">
          {current.segments.map((segment, idx) => {
            if (!segment.isBlank) {
              return <span key={idx}>{segment.text}</span>;
            }
            const thisBlankIndex = blankCounter++;
            const selectedValue = answers[thisBlankIndex] || "";
            const isCorrect = selectedValue === segment.correctAnswer;
            
            let selectClass = "border-primary bg-white text-foreground";
            if (isChecked) {
              selectClass = isCorrect 
                ? "border-green-500 bg-green-50 text-green-700" 
                : "border-red-500 bg-red-50 text-red-700";
            }

            return (
              <select
                key={idx}
                value={selectedValue}
                onChange={(e) => handleSelectAnswer(thisBlankIndex, e.target.value)}
                disabled={isChecked}
                className={`inline-block mx-1 px-3 py-1 rounded-lg border-2 font-medium text-base cursor-pointer transition-colors ${selectClass}`}
                data-testid={`dropdown-blank-${thisBlankIndex}`}
              >
                <option value="">—</option>
                {current.dropdownOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            );
          })}
        </div>

        {isChecked && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/80">
                <p className="font-medium mb-2">Correct answers:</p>
                <p>{blanks.map((_, idx) => {
                  const seg = current.segments.filter(s => s.isBlank)[idx];
                  return seg?.correctAnswer;
                }).join(", ")}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {!isChecked ? (
            <Button onClick={handleCheck} disabled={!allAnswered} size="lg">
              Check Answers
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

function PageSelector({ currentPage, onSelect }: { currentPage: PageType | null; onSelect: (page: PageType) => void }) {
  const pages = [
    { id: "1" as PageType, title: "Page 1", description: "Select the correct pronoun" },
    { id: "2" as PageType, title: "Page 2", description: "Rewrite the sentence" },
    { id: "3" as PageType, title: "Page 3", description: "Choose the correct answer" },
    { id: "4" as PageType, title: "Page 4", description: "Fill in the story blanks" },
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

export default function DirectObjectExercise() {
  const [, params] = useRoute("/practice/exercises/direct-object/:page");
  const [selectedPage, setSelectedPage] = useState<PageType | null>(
    (params?.page as PageType) || null
  );

  const handleSelectPage = (page: PageType) => {
    setSelectedPage(page);
    window.history.pushState({}, "", `/practice/exercises/direct-object/${page}`);
  };

  const handleBack = () => {
    setSelectedPage(null);
    window.history.pushState({}, "", "/practice/exercises/direct-object");
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Direct Object Practice</h1>
          <p className="text-lg text-muted-foreground">
            me, te, lo, la, las, los, nos
          </p>
        </div>

        {!selectedPage ? (
          <PageSelector currentPage={selectedPage} onSelect={handleSelectPage} />
        ) : selectedPage === "1" ? (
          <MultipleChoicePage 
            exercises={directObjectPage1} 
            pageNum="1" 
            instruction="Replace the direct object in each sentence with the correct direct object pronoun."
          />
        ) : selectedPage === "2" ? (
          <RewritePage 
            exercises={directObjectPage2} 
            instruction="Rewrite each sentence by replacing the direct object with the correct pronoun."
          />
        ) : selectedPage === "3" ? (
          <MultipleChoicePage 
            exercises={directObjectPage3} 
            pageNum="3" 
            instruction="Choose the correct answer that replaces the direct object with the right pronoun."
          />
        ) : (
          <FillInStoryPage exercises={directObjectPage4} />
        )}
      </div>
    </div>
  );
}
