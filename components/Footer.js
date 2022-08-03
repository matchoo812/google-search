import React from "react";

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-6 text-small text-gray-600'>
      <p>Copyright &copy; {new Date().getFullYear()} Matt Ballard</p>
    </footer>
  );
}