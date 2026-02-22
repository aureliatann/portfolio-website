export default function About() {
  return (
    // ID = allows navbar links like #about to scroll here
    // p-8 → adds padding on all sides
    // space-y-4 → adds vertical spacing between all children
    <section id="about" className="p-8 space-y-4">
      
      {/* Intro text */}
      <div className="space-y-1"> 
        <p className="text-gray-600">Hi! 👋</p>
        <h2 className="text-3xl font-bold text-gray-900">I'm Aurelia Tan</h2>
      </div>

      {/* Paragraph */}
      {/* leading-relaxed → slightly increased line-height 
          {‘ ’} → ensures proper spacing between JSX elements and words */}
      <p className="text-gray-600 leading-relaxed">
        I'm currently a final-year Computer Science student at The University of Melbourne, aspiring to be a{' '}
        <strong>full-stack developer</strong> with a strong passion for enhancing{' '}<strong>user experiences</strong>.</p>
    </section>
  );
}