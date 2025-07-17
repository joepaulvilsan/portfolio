
import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export const ContactSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual email service
    try {
      // This would be replaced with actual email service like Formspree, Netlify Forms, etc.
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 dark:bg-green-900/50 rounded-full p-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-4">
                Thank You!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-6">
                Your message has been sent successfully. I'll get back to you as soon as possible!
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/50"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Build Something Great
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'm always excited to work on new projects 
            and collaborate with amazing people. Let's create something extraordinary together.
          </p>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="border-2 focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full hover:scale-105 transition-transform w-full md:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-12 pt-8 border-t border-muted">
              <p className="text-muted-foreground mb-4">Or reach out directly:</p>
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-transform"
                asChild
              >
                <a href="mailto:joepaul@example.com">
                  <Mail className="mr-3 h-5 w-5" />
                  joepaul@example.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
