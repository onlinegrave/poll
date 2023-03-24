export default function Footer() {
  return <footer>
    <span className="h-2 rotate-[357deg] -mb-2 absolute bg-yellow-100 w-full bottom-0 left-0 right-0"></span>
    <div className="flex itesm-center justify-center py-16">
      <nav className="flex gap-12">
        <div>
          <div className="font-bold uppercase">General</div>
          <ul>
            <li className="text-gray-300">About Us</li>
            <li className="text-gray-300">Support</li>
            <li className="text-gray-300">Get in touch</li>
            <li className="text-gray-300">Brand</li>
            <li className="text-gray-300">What&apos;s New</li>
          </ul>
        </div>
        <div>
          <div className="font-bold uppercase">General</div>
          <ul>
            <li className="text-gray-300">
              <span>
                <span className="mr-2">Go Pro</span>
                <span className="text-xs bg-orange-500 text-white font-bold px-1 rounded uppercase">New</span>
              </span>
            </li>
            <li className="text-gray-300">
              <span>
                <span className="mr-2">Ad Free Pro</span>
                <span className="text-xs bg-orange-500 text-white font-bold px-1 rounded uppercase">New</span>
              </span>
            </li>
            <li className="text-gray-300">Sign Up</li>
            <li className="text-gray-300">Login</li>
            <li className="text-gray-300">Password Reset</li>
          </ul>
        </div>
        <div>
          <div className="font-bold uppercase">Privacy</div>
          <ul>
            <li className="text-gray-300">Terms of use</li>
            <li className="text-gray-300">Privacy Policy</li>
          </ul>
        </div>
      </nav>

    </div>
  </footer>;
}
