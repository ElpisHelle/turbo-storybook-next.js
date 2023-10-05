import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div style={{height:'100%'}}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Main page</h1>
        </div>
      </div>
    </div>
  );
}
