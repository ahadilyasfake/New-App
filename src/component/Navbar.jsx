import React from "react";

export default function Navbar({getBuyCategory}) {
  return (
    <div>
      <header className="text-gray-400 bg-neutral-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-newspaper"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
              <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
            </svg>
            <span className="ml-3 text-xl">News Hub</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <span className="mr-5 hover:text-white" onClick={()=>getBuyCategory("Sport")}>
              Sports
            </span>
            <span className="mr-5 hover:text-white" onClick={()=>getBuyCategory("Politics")}>
             Politics
            </span>
            <span className="mr-5 hover:text-white" onClick={()=>getBuyCategory("Trending")}>
              Trending
            </span>
            <span className="mr-5 hover:text-white" onClick={()=>getBuyCategory("Technology")}>
             Technology
            </span>
          </nav>
        </div>
      </header>
    </div>
  );
}
