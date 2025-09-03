import { LandingPageData } from "@/_data/landing-page";
import { Logo } from "@/components/shared/logo";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="mx-auto px-12 w-full relative">
      <div className="  px-6 py-12 border-t border-neutral-800 mt-36 pt-8 ">
        <div className="flex mt-6 flex-col md:flex-row md:flex-wrap lg:flex-row lg:justify-between gap-10 lg:gap-24">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
  
              <Logo/>
            </div>
            {/* 
            Interview Coder is a desktop
              app designed to help job seekers ace technical interviews by
              providing real-time assistance with coding questions. */}

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {LandingPageData.footer.description}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://x.com/pacepard"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <XIcon className="w-4 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/pacepard"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/pacepard/"
                className="w-9 h-9 bg-neutral-800 dark:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-300 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Wrapped the last two sections in a new flex div */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-24">
            {/* 1 Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">{LandingPageData.footer.items.group}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="./damola-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#playground"
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    Terms of use
                  </a>
                </li>
                <li>
                  <a
                    href="#playground"
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Section */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">{LandingPageData.footer.items.group}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    Contributors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex ">
          <span className="text-[6.2rem] md:text-[12rem] lg:text-[18.5rem] font-bold select-none leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
            The Lens.
          </span>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row mt-10 md:mt32 border-t border-neutral-800 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
            <p className="text-sm text-neutral-500">
              {" "}
              Managed with ❤️ by Pacepard
            </p>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/pacepard"
              className=" text-neutral-400 hover:text-neutral-300 transition-colors"
            >
              Lens | Pacepard
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
