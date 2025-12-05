import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Learn from "@/pages/learn";
import Practice from "@/pages/practice";
import PracticeTest from "@/pages/practice-test";
import Exercises from "@/pages/exercises";
import DirectObjectExercise from "@/pages/direct-object-exercise";
import IndirectObjectExercise from "@/pages/indirect-object-exercise";
import CombinedObjectsExercise from "@/pages/combined-objects-exercise";
import CombinedObjectsSeExercise from "@/pages/combined-objects-se-exercise";
import VerbTensesExercise from "@/pages/verb-tenses-exercise";
import ExercisePlaceholder from "@/pages/exercise-placeholder";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/learn" component={Learn} />
      <Route path="/practice" component={Practice} />
      <Route path="/practice/test" component={PracticeTest} />
      <Route path="/practice/exercises" component={Exercises} />
      <Route path="/practice/exercises/direct-object" component={DirectObjectExercise} />
      <Route path="/practice/exercises/direct-object/:page" component={DirectObjectExercise} />
      <Route path="/practice/exercises/indirect-object" component={IndirectObjectExercise} />
      <Route path="/practice/exercises/indirect-object/:page" component={IndirectObjectExercise} />
      <Route path="/practice/exercises/combined-objects" component={CombinedObjectsExercise} />
      <Route path="/practice/exercises/combined-objects/:page" component={CombinedObjectsExercise} />
      <Route path="/practice/exercises/combined-objects-se" component={CombinedObjectsSeExercise} />
      <Route path="/practice/exercises/combined-objects-se/:page" component={CombinedObjectsSeExercise} />
      <Route path="/practice/exercises/verb-tenses" component={VerbTensesExercise} />
      <Route path="/practice/exercises/verb-tenses/:page" component={VerbTensesExercise} />
      <Route path="/practice/exercises/:type" component={ExercisePlaceholder} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
