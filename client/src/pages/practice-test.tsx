import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { quizQuestions, getRecommendation, type Question } from "@/data/quizData";

export default function PracticeTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [userChoices, setUserChoices] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestionIndex) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const newAnswers = { ...answers, [currentQuestion.id]: isCorrect };
    const newUserChoices = { ...userChoices, [currentQuestion.id]: selectedOption };
    
    setAnswers(newAnswers);
    setUserChoices(newUserChoices);
    setSelectedOption(null);

    // Logic for stopping early based on specific conditions
    // Condition 1: Check after Q2 (Index 1)
    if (currentQuestion.id === 2) {
        const q1Correct = newAnswers[1];
        const q2Correct = newAnswers[2];
        
        // If either Q1 or Q2 is wrong, stop
        if (!q1Correct || !q2Correct) {
            setIsFinished(true);
            return;
        }
    }

    // Condition 2: Check after Q4 (Index 3)
    if (currentQuestion.id === 4) {
        const q3Correct = newAnswers[3];
        const q4Correct = newAnswers[4];
        
        // If either Q3 or Q4 is wrong, stop (assuming Q1 and Q2 were correct to get here)
        if (!q3Correct || !q4Correct) {
            setIsFinished(true);
            return;
        }
    }

    // Normal progression
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const recommendation = getRecommendation(answers);
    const score = Object.values(answers).filter(Boolean).length;
    const questionsAnswered = Object.keys(answers).length;

    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-foreground">Test Results</h1>
                <p className="text-muted-foreground">You answered {score} out of {questionsAnswered} correctly</p>
            </div>

            <div className="mb-8 p-6 bg-accent/20 rounded-2xl border border-accent/30">
                <h3 className="font-bold text-lg mb-2 text-primary flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" /> Recommendation
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                    {recommendation.message}
                    {recommendation.links.length > 0 && (
                      <span className="block mt-2">
                        {recommendation.links.map((link, index) => (
                          <Link key={index} href={link.href}>
                            <span className="inline-block mt-1 text-primary font-semibold underline hover:text-primary/80 cursor-pointer">
                              {link.text}
                            </span>
                          </Link>
                        ))}
                      </span>
                    )}
                </p>
            </div>

            <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2">
                {Object.keys(answers).map((qId) => {
                    const id = parseInt(qId);
                    const isRight = answers[id];
                    const q = quizQuestions.find(q => q.id === id);
                    const userChoice = userChoices[id];
                    
                    if (!q) return null;

                    return (
                        <div key={id} className={`p-4 rounded-xl border ${isRight ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-medium text-sm text-foreground/70 mb-1">Question {id}</p>
                                    <p className="font-semibold mb-2">{q.original}</p>
                                    {!isRight && (
                                        <div className="text-sm">
                                            <p className="text-red-600">Your answer: {q.options.find(o => o.id === userChoice)?.text}</p>
                                            <p className="text-green-700 font-medium mt-1">Correct answer: {q.options.find(o => o.id === q.correctAnswer)?.text}</p>
                                        </div>
                                    )}
                                </div>
                                {isRight ? <CheckCircle className="text-green-500 h-6 w-6 shrink-0" /> : <XCircle className="text-red-500 h-6 w-6 shrink-0" />}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4">
                <Link href="/practice" className="w-full">
                    <Button variant="outline" className="w-full h-12 text-lg">
                        Back to Practice
                    </Button>
                </Link>
                <Button 
                    onClick={() => window.location.reload()} 
                    className="w-full h-12 text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                    <RotateCcw className="mr-2 h-5 w-5" /> Retry Test
                </Button>
            </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col">
        <div className="mb-8 flex items-center justify-between">
            <Link href="/practice">
                <Button variant="ghost" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Exit Test
                </Button>
            </Link>
            <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
        </div>

        <Progress value={progress} className="h-2 mb-8" />

        <div className="flex-1 flex flex-col justify-center">
            <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                            Question {currentQuestion.id}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground leading-tight">
                            {currentQuestion.original}
                        </h2>
                        {currentQuestion.instruction && (
                            <p className="text-xl text-muted-foreground">
                                {currentQuestion.instruction}
                            </p>
                        )}
                    </div>

                    <div className="grid gap-4">
                        {currentQuestion.options.map((option) => (
                            <div 
                                key={option.id}
                                onClick={() => handleOptionSelect(option.id)}
                                className={`
                                    p-6 rounded-2xl border-2 cursor-pointer transition-all duration-200
                                    flex items-center gap-4
                                    ${selectedOption === option.id 
                                        ? 'border-primary bg-primary/5 shadow-md' 
                                        : 'border-border bg-white hover:border-primary/30 hover:bg-slate-50'
                                    }
                                `}
                            >
                                <div className={`
                                    w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors
                                    ${selectedOption === option.id 
                                        ? 'border-primary bg-primary text-white' 
                                        : 'border-muted-foreground/30 text-muted-foreground'
                                    }
                                `}>
                                    {option.id.toUpperCase()}
                                </div>
                                <span className="text-lg font-medium text-foreground">
                                    {option.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="mt-8 pt-6 flex justify-end">
            <Button 
                size="lg" 
                onClick={handleNext} 
                disabled={!selectedOption}
                className="h-14 px-8 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg disabled:opacity-50 disabled:shadow-none"
            >
                {currentQuestionIndex === totalQuestions - 1 ? "Finish Test" : "Next Question"}
            </Button>
        </div>
      </div>
    </div>
  );
}
