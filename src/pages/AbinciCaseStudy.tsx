import { Helmet } from "react-helmet";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const AbinciCaseStudy = () => (
  <>
    <Helmet>
      <title>ABINCI Case Study | Eniola Abonde</title>
      <meta
        name="description"
        content="A case study of ABINCI, a mobile app for discovering Hausa dishes and ordering from local restaurants."
      />
    </Helmet>

    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold hover:text-primary">
            Eniola.
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="bg-[#8f222c] text-white">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
                Mobile app case study
              </p>
              <h1 className="text-5xl font-bold md:text-7xl">ABINCI</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                A simple way to discover Hausa dishes and order from local
                restaurants, all from a mobile app.
              </p>
            </div>
            <a
              href="https://github.com/eniola-thedev/ABINCI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:text-white/75"
            >
              <Github className="h-4 w-4" />
              View source code
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <div className="container mx-auto max-w-6xl px-4">
          <figure className="-mt-5 overflow-hidden rounded-md border border-border bg-background shadow-lg md:-mt-8">
            <img
              src="/images/projects/Abinci.jpg"
              alt="ABINCI app screens showing Hausa dishes, restaurant menus, and ordering controls"
              className="h-auto w-full object-contain"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              ABINCI mobile app interface
            </figcaption>
          </figure>

          <section className="grid gap-8 border-b border-border py-12 md:grid-cols-[1fr_2fr] md:py-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                The brief
              </p>
              <h2 className="mt-3 text-3xl font-bold">Local food, easier to find</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                ABINCI is a mobile food-ordering app centered on Hausa dishes
                and local restaurants. The experience brings dish discovery,
                restaurant menus, and ordering into one place.
              </p>
              <p>
                The goal was to make it straightforward for someone to browse
                what is available, understand the dish and its options, and
                move an order into their cart.
              </p>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              The experience
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              From browsing to basket
            </h2>

            <ol className="mt-8 grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">
              <li className="py-6 md:px-6 md:first:pl-0">
                <span className="text-sm font-semibold text-primary">01</span>
                <h3 className="mt-3 text-xl font-semibold">Discover</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Browse Hausa dishes, food categories, and nearby restaurants
                  from the home screen.
                </p>
              </li>
              <li className="border-t border-border py-6 md:border-t-0 md:px-6">
                <span className="text-sm font-semibold text-primary">02</span>
                <h3 className="mt-3 text-xl font-semibold">Choose</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Review dish details, compare available choices, and select a
                  portion before ordering.
                </p>
              </li>
              <li className="border-t border-border py-6 md:border-t-0 md:px-6 md:last:pr-0">
                <span className="text-sm font-semibold text-primary">03</span>
                <h3 className="mt-3 text-xl font-semibold">Add to cart</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Adjust item quantity and use the persistent cart action to
                  continue with the order.
                </p>
              </li>
            </ol>
          </section>

          <section className="grid gap-8 border-t border-border py-12 md:grid-cols-[1fr_2fr] md:py-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Implementation
              </p>
              <h2 className="mt-3 text-3xl font-bold">Built for mobile</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The interface uses food imagery to make browsing visual, while
                dish details keep key choices and the add-to-cart action close
                to the item being considered.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
                {["React Native", "TypeScript", "Tailwind CSS", "Expo"].map(
                  (technology) => (
                    <li
                      key={technology}
                      className="rounded-sm border border-border px-3 py-1.5 text-sm"
                    >
                      {technology}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </section>

          <section className="mb-16 flex flex-col gap-5 border-t border-border py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Explore the project</p>
              <h2 className="mt-1 text-2xl font-bold">See ABINCI on GitHub</h2>
            </div>
            <Button asChild>
              <a
                href="https://github.com/eniola-thedev/ABINCI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Source Code
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default AbinciCaseStudy;