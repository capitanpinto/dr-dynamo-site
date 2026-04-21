export default function Home() {
  const services = [
    {
      title: "Stage Show",
      description:
        "A high-energy circus performance featuring cyr wheel, handstands, juggling, poi, breakdance, and storytelling.",
    },
    {
      title: "Ambient Entertainment",
      description:
        "Interactive performance sets for festivals, weddings, corporate events, and private celebrations.",
    },
    {
      title: "Workshops",
      description:
        "Handstands, circus skills, movement, and beginner-friendly balancing workshops for groups and events.",
    },
  ];

  const testimonials = [
    {
      quote:
        "A unique and unforgettable performance. Guests were amazed from start to finish.",
      name: "Event Organizer",
    },
    {
      quote:
        "Professional, engaging, and incredibly talented. The perfect addition to our festival lineup.",
      name: "Festival Producer",
    },
  ];

  // Put the EXACT filenames you have inside /public
  const galleryImages = [
    "/gallery1.jpeg",
    "/gallery2.png",
    "/gallery3.jpeg",
    "/gallery4.jpg",
    "/gallery5.png",
    "/gallery6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dr. Dynamo</h1>
            <p className="text-sm text-neutral-600">
              A Unique Circus Experience
            </p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Live Performance for Events & Festivals
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Circus, movement, and storytelling people remember
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              A visually striking act blending cyr wheel, hand balancing,
              juggling, poi, breakdance, and theatrical storytelling.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-black px-6 py-3 text-white"
              >
                Book a Performance
              </a>

              <a
                href="#gallery"
                className="rounded-2xl border px-6 py-3"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <img
              src="/hero.jpg"
              alt="Hero"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-3xl font-bold mb-4">About</h3>

          <p className="max-w-3xl leading-8 text-neutral-700">
            Dr. Dynamo combines circus arts, acrobatics, movement, and
            storytelling to create unforgettable experiences for audiences of all
            ages.
          </p>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="mb-8 text-3xl font-bold">Services</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border p-6 shadow-sm"
              >
                <h4 className="text-xl font-semibold">{service.title}</h4>

                <p className="mt-3 leading-7 text-neutral-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="mb-8 text-3xl font-bold">Gallery</h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="aspect-[4/5] overflow-hidden rounded-3xl border shadow-sm"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="mb-8 text-3xl font-bold">Testimonials</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border p-6 shadow-sm"
              >
                <p className="text-lg leading-8">“{item.quote}”</p>

                <p className="mt-4 text-sm text-neutral-500">
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border p-8 shadow-sm">
            <h3 className="text-3xl font-bold">Book a Performance</h3>

            <p className="mt-4 text-neutral-700">
              Email: santiagopfisica@gmail.com
            </p>

            <p className="text-neutral-700">
              Charlottesville, Virginia
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}