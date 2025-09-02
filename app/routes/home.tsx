import type { Route } from "./+types/home";
//17:32
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feeback for your dream job!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>
    </section>
  </main>;
}
