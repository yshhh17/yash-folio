import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="contact" className="relative py-20 md:py-24 px-4 md:px-6 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -bottom-20 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 10, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <motion.div
            className="h-1 bg-primary mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          />
          <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Let's build something great together.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center justify-center"
                title={social.name}
                whileHover={{ y: -4, scale: 1.06, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Card className="bg-card border-border hover:border-primary/40 transition-colors duration-300">
          <CardHeader>
            <CardTitle>Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Click the button below to send me an email directly from your email client.
            </p>
            <motion.a
              href="mailto:yshhh173@gmail.com?subject=Hello%20from%20Portfolio&body=Hi%20Yash,%0D%0A%0D%0A"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Email
            </motion.a>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
