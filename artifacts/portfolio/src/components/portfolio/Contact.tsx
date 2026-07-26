import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Github, Linkedin, Send, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: 'Message Transmitted',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-[var(--theme-bg)] border-t-2 border-[var(--theme-border)] relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-[var(--theme-text)] mb-16 text-center"
        >
          <span className="text-[var(--theme-primary)] font-mono text-xl md:text-2xl mr-4">05.</span>
          ESTABLISH CONNECTION
        </motion.h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--theme-text)] mb-4">
              LET'S BUILD SOMETHING.
            </h3>
            <p className="text-[var(--theme-text-muted)] font-mono text-sm mb-8 leading-relaxed">
              I'm currently looking for new opportunities. My inbox is always open — whether you have a question or just want to say hi, I'll get back to you.
            </p>

            <div className="space-y-3">
              {[
                { icon: <Mail className="w-4 h-4" />, label: 'tanish.sabane@gmail.com', href: 'mailto:tanish.sabane@gmail.com', color: 'var(--theme-primary)' },
                { icon: <Github className="w-4 h-4" />, label: 'GitHub', href: 'https://github.com/tanishsabane07', color: 'var(--theme-primary)' },
                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/in/tanishsabane', color: 'var(--theme-secondary)' },
                { icon: <Code className="w-4 h-4" />, label: 'LeetCode', href: 'https://leetcode.com/u/tanishsabane', color: 'var(--theme-primary)' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-mono text-sm text-[var(--theme-text-muted)] border border-[var(--theme-border-subtle)] px-4 py-2 hover:border-[var(--theme-border)] hover:text-[var(--theme-primary)] transition-all w-fit"
                  style={{ boxShadow: '0 0 0 transparent' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `2px 2px 0px ${item.color}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 transparent')}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--theme-bg-card)] p-6 md:p-8 border-2 border-[var(--theme-border)]"
            style={{ boxShadow: '6px 6px 0px var(--theme-primary)' }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-black uppercase tracking-widest text-[var(--theme-text-muted)]">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="bg-[var(--theme-bg)] border-2 border-[var(--theme-border-subtle)] focus:border-[var(--theme-primary)] focus-visible:ring-0 text-[var(--theme-text)] font-mono"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-black uppercase tracking-widest text-[var(--theme-text-muted)]">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          className="bg-[var(--theme-bg)] border-2 border-[var(--theme-border-subtle)] focus:border-[var(--theme-primary)] focus-visible:ring-0 text-[var(--theme-text)] font-mono"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-black uppercase tracking-widest text-[var(--theme-text-muted)]">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="What's on your mind?"
                          className="bg-[var(--theme-bg)] border-2 border-[var(--theme-border-subtle)] focus:border-[var(--theme-primary)] focus-visible:ring-0 text-[var(--theme-text)] font-mono min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[var(--theme-primary)] text-[var(--theme-logo-text)] font-mono font-black text-sm uppercase tracking-widest border-2 border-[var(--theme-primary)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: '4px 4px 0px var(--theme-secondary)' }}
                >
                  {isSubmitting ? '>_ TRANSMITTING...' : (
                    <><Send className="w-4 h-4" /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
