/* REACT COMPONENTS:
    export default function ComponentName() {
        return <h1>Component Content</h1>;
    }
    - export default: makes component available to other files
    - function ComponentName(): creates a JS function named ComponentName (in React, function = component)
    - return ...: JSX NOT HTML, React takes JSX (HTML inside JS) and turns it into HTML in the browser
                  return must return ONE thing (so wrap everything in one parent element)
*/

export default function Navbar() {
  return (
    /* (THIS IS INSIDE JS)
    w-full → full width
    bg-white → white background
    shadow-sm → small shadow under navbar
    */
    <nav className="w-full bg-white shadow-sm">
       {/* (THIS IS INSIDE JSX, commenting is different)
        NOTE: className="..." is React version of class="..." in HTML
        max-w-5xl → limit content width so it doesn’t stretch on big screens
        mx-auto → centers the navbar content
        flex → place items in a row
        items-center → vertically center items
        justify-between → space between logo and links
        p-4 → padding on all sides
      */}
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-semibold">AT</h1>
        {/* Navigation links */}
        <ul className="flex gap-6 text-gray-700">
          {/* Each <a href="#id"> scrolls to a section with matching ID */}
          <li><a href="#about" className="hover:text-black">About</a></li>
          <li><a href="#skills" className="hover:text-black">Skills</a></li>
          <li><a href="#projects" className="hover:text-black">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}