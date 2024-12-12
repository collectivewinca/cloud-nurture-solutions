import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import ContactFormInput from "./ContactFormInput";
import ContactFormTextarea from "./ContactFormTextarea";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  business_name: string;
  best_time_to_call: string;
  message: string;
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    best_time_to_call: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started", formData);
    setIsSubmitting(true);

    try {
      // Insert into contact_requests table
      const { error: dbError } = await supabase
        .from("contact_requests")
        .insert([formData]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      console.log("Database insert successful");

      // Send thank you email
      const { error: emailError } = await supabase.functions.invoke('send-thank-you-email', {
        body: {
          type: 'contact',
          name: formData.name,
          email: formData.email,
          business_name: formData.business_name
        }
      });

      if (emailError) {
        console.error("Email sending error:", emailError);
        throw emailError;
      }

      console.log("Email sent successfully");

      toast({
        title: "Success!",
        description: "Your message has been sent. Check your email for confirmation.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        business_name: "",
        best_time_to_call: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContactFormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ContactFormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <ContactFormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <ContactFormInput
          label="Business Name"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          required
        />
        <ContactFormInput
          label="Best Time to Call"
          name="best_time_to_call"
          value={formData.best_time_to_call}
          onChange={handleChange}
          placeholder="e.g., Weekdays 9AM-5PM"
          required
        />
        <div className="md:col-span-2">
          <ContactFormTextarea
            label="Your Requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 font-medium"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;