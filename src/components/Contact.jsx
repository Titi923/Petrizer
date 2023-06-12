const Contact = () => {
    return (
        <section id="contact" className="lg:section my-6 py-16">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    {/* Text */}
                    <div className="flex-1">
                        <h4 className="mb-2 text-2xl font-bold uppercase tracking-wide text-accent lg:text-[40px]">
                            Get in Touch!
                        </h4>
                        <h2 className="mb-12 text-[40px] leading-none lg:text-[90px]">
                            Let's Work <br /> Togheter!
                        </h2>
                    </div>
                    {/* Form */}
                    <form className="flex flex-1 flex-col items-start gap-y-6 rounded-2xl border p-6 pb-12" name="contact" netlify netlify-honeypot="bot-field" hidden>
                        <input
                            className="w-full border-b-[3px] bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            className="w-full border-b-[3px] bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
                            type="text"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            className="mb-12 w-full resize-none border-b-[3px] bg-transparent py-6 outline-none transition-all placeholder:text-white focus:border-accent"
                            type="text"
                            placeholder="Your Message"
                            required
                        ></textarea>
                        <button className="btn btn-lg">Send Message</button>
                        <div id="recaptcha" data-netlify-recaptcha="true" required></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
