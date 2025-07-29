import { Info, Target, User, ClipboardList } from "lucide-react";
import TestimonialSection from '../_components/testimonialSection'
// import Image from 'next/image';
export default function page() {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen p-6 md:p-12">
        <div className="flex justify-between items-center px-5 mb-8">
          <h1 className="text-3xl font-bold">About</h1>
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            / <span>About</span>
          </nav>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4 text-blue-600">
            <Info className="w-6 h-6 mr-2" />
            <span className="text-lg font-medium">About Us</span>
          </div>

          <div className="flex-col sm:flex-row flex gap-4 ">
            <div>
              <h2 className="text-3xl font-bold text-sec mb-4">
                Nemo enim ipsam voluptatem quia voluptas aspernatur
              </h2>

              <p className="text-gray-600 mb-4">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-gray-700 mb-8 border-2 border-main p-3 rounded-2xl">
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <hr className="text-gray-300" />
              <p>
                Amet eos ut. Officiis soluta ab id dolor non sint. Corporis
                omnis consequatur quisquam ex consequuntur quo omnis. Quo
                eligendi cum. Amet mollitia qui quidem dolores praesentium quasi
                ut et.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Feature 1 */}
            <div className="p-4 group">
              <div className="inline-block bg-blue-100 group-hover:bg-main group-hover:text-white transition duration-300    text-main p-3 rounded-xl mb-3">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-main transition duration-300">
                At vero eos
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 group">
              <div className="inline-block bg-blue-100 group-hover:bg-main group-hover:text-white transition duration-300 text-main p-3 rounded-xl mb-3">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-main transition duration-300">
                Sed ut perspiciatis
              </h3>
              <p className="text-gray-600">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 group">
              <div className="inline-block bg-blue-100 group-hover:bg-main group-hover:text-white transition duration-300 text-blue-600 p-3 rounded-xl mb-3">
                <ClipboardList className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-main transition duration-300">
                Nemo enim ipsam
              </h3>
              <p className="text-gray-600">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam.
              </p>
            </div>
          </div>
        </div>

        <button
          className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
      <TestimonialSection/>
    </div>
  );
}
