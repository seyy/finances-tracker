import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <Navbar />
      <section>
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">$100,000</h2>
      </section>
    </main>
  )
}
