import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      <p>
        &copy; 2021 &#183; Coded by{" "}
        <a
          href="https://charlotte-mendy.netlify.app"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          title="View Charlotte's portfolio"
        >
          Charlotte Mendy
        </a>{" "}
        &#183; Open-sourced on{" "}
        <a
          href="https://github.com/Charlotte-Mendy/weather-app-react"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          title="View project source code on GitHub"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
