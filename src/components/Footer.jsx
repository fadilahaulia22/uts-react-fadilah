import "../index.css";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">UTS Rect Dila 2024</h1>
        <p className="text-sm mt-2">© 2024 Your Movie App. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="/about" className="mr-4 hover:text-blue-500">
            About Us
          </a>
          <a href="/contact" className="mr-4 hover:text-blue-500">
            Contact Us
          </a>
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

  