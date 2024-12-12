import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BlogHero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Insert into newsletter_subscribers table
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert([{ email }]);

      if (dbError) throw dbError;

      // Send thank you email
      const { error: emailError } = await supabase.functions.invoke('send-thank-you-email', {
        body: {
          type: 'newsletter',
          email: email
        }
      });

      if (emailError) throw emailError;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter. Check your email for confirmation.",
      });
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-secondary py-24 sm:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Latest Insights in{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary-success bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Stay updated with our latest articles, insights, and industry news
            </p>
            
            <form onSubmit={handleSubmit} className="mt-10 sm:mx-auto sm:max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;