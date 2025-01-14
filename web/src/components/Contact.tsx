import { useState } from "react";
import { Send, Phone, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  // Handle Input Change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Form Submission Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/submit-form`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      console.log(response)

      if (!response.ok) {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "Something went wrong!",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to submit the form. Please try again later.",
        variant: "destructive",
          className: "bg-gray-900 ",
      });
      console.error("Form submission error:", error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91-8000781301",
      link: "tel:+91-8000781301",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "readigital@gmail.com",
      link: "mailto:readigital@gmail.com",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "B 66/67 Digital Street, Ahmedabad City, India",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com", label: "GitHub" },
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#1a1a1a,transparent)] animate-pulse opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary">
            We'd Love to Hear from You
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">We're just a call or message away!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hidden lg:block space-y-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block p-6 rounded-lg glass-card hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.label}</h3>
                    <p className="text-foreground/80">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
            <div className="flex justify-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 text-primary hover:scale-110 hover:bg-primary/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 glass-card p-6 md:p-8 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                      required
                    />
                  </div>
                ))}
              </div>
              {["mobile", "subject", "message"].map((field, idx) => (
                <div key={idx}>
                  <label htmlFor={field} className="block text-sm font-medium mb-2 capitalize">
                    {field.replace("_", " ")}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                      required
                    />
                  ) : (
                    <input
                      type={field === "mobile" ? "tel" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      placeholder={`Enter ${field}`}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-300"
                      required
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover-glow group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
