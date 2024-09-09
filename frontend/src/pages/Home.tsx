import { Appbar } from "../components/Appbar";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Appbar />
      <main className="flex-grow container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Explore our latest articles and insights on a range of topics. Our blog is designed to provide you with valuable information and engaging content.
        </p>
        {/* Blog post previews or additional content can be added here */}
      </main>
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm mb-2">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <p className="text-xs">
            Designed with ❤️ by Mohd Azraid
          </p>
        </div>
      </footer>
    </div>
  );
};
