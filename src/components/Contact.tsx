import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Linkedin, Github, Twitter } from "lucide-react";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/yshhh17" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/yshhh17" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/yshhh17" },
];

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section id="contact" className="py-20 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Let's build something great together.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center"
                title={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Click the button below to send me an email directly from your email client.
            </p>
            <a
              href="mailto:yshhh173@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Yash,%0D%0A%0D%0A"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Send Email
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
