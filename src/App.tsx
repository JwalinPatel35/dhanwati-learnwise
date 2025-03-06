
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";
import Community from "./pages/Community";
import CourseBasicsOfSaving from "./pages/CourseBasicsOfSaving";
import CoursePPF from "./pages/CoursePPF";
import CourseStockMarketBasics from "./pages/CourseStockMarketBasics";
import CourseTaxPlanning from "./pages/CourseTaxPlanning";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/community" element={<Community />} />
            <Route path="/courses/basics-of-saving" element={<CourseBasicsOfSaving />} />
            <Route path="/courses/public-provident-fund" element={<CoursePPF />} />
            <Route path="/courses/stock-market-basics" element={<CourseStockMarketBasics />} />
            <Route path="/courses/tax-planning" element={<CourseTaxPlanning />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
