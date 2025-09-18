import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { cn } from "../lib/utils";


export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            
        }, 1500);
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just
                connecting with like-minded individuals. Feel free to reach out to me via
                email or connect with me on LinkedIn!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:sam20003@byui.edu" className="text-muted-foreground hover:text-primary transition-colors">
                                    sam20003@byui.edu
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+12143350244" className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (214) 335-0244
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>{" "}
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">
                                    Rexburg, ID
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4>Connect With Me!</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/savannah-harvey1" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font semibold mb-6">Send a Message</h3>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Savannah Harvey..."
                                />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                placeholder="john@gmail.com"
                                />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your message here..."
                                />
                        </div>

                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <Send size={16}/>
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </section>
}