import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <main className="container mx-auto px-4 py-8 flex-grow">
        <Component {...pageProps} />
      </main>

    </div>
  );
}
