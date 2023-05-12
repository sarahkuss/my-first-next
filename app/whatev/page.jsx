import Hero from "./Hero";

// changes the website title and adds description for when you share link
export const metadata = {
  title: "Um...Whatev",
  description: "This is custom metadata for this route.",
  "og:image": "https://thumbs.dreamstime.com/b/whatever-hand-sign-vector-146406356.jpg"
}


export default function Page() {
  return (
    <main className="p-8">
      <Hero />
      <h1 className="underline decoration-wavy font-bold text-2xl">Whatev</h1>
      <p>Routes in Next.js are too easy</p>
    </main>
  )
}