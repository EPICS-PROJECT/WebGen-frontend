import React from 'react';
import logo2 from '../../logo.png';

export default function Footer() {
    return (
        <div>
        <footer aria-label="Site Footer" class="bg-gray-100">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
      <a
        class="inline-block rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
        href="#navbar"
      >
        <span class="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-600 lg:justify-start">
          <img src={logo2} alt="logo" class="h-20 w-auto" />
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
          Modernizing, Digitalizing, Revolutionarizing Healthcare
        </p>
      </div>

      <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
        <ul
          class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="https://github.com/EPICS-PROJECT">
            Github
            </a>
          </li>

         

          

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" href="mailto:team9smc@gmail.com">
              Mail Us
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2024 Webgen. All rights reserved.
    </p>
  </div>
</footer>

            </div>
    );
}