import React from 'react';

const books = [
  {
    id: 1,
    title: "Understanding Islamic Jurisprudence",
    author: "Dr. Ahmed Khan",
    description: "A comprehensive guide to Islamic legal principles and their applications in modern times.",
    coverImage: "/api/placeholder/200/300",
    category: "Jurisprudence"
  },
  {
    id: 2,
    title: "The Prophet's Path",
    author: "Dr. Sarah Rahman",
    description: "Detailed analysis of the Prophet's (PBUH) teachings and their relevance today.",
    coverImage: "/api/placeholder/200/300",
    category: "Biography"
  },
  {
    id: 3,
    title: "Islamic Economics",
    author: "Prof. Mohammad Ali",
    description: "Modern perspective on Islamic economic principles and financial systems.",
    coverImage: "/api/placeholder/200/300",
    category: "Economics"
  },
  {
    id: 4,
    title: "Quranic Studies",
    author: "Dr. Fatima Hussein",
    description: "In-depth exploration of Quranic verses and their interpretations.",
    coverImage: "/api/placeholder/200/300",
    category: "Quran"
  },
  {
    id: 5,
    title: "Islamic History",
    author: "Prof. Abdullah Malik",
    description: "Comprehensive overview of Islamic civilization and its contributions.",
    coverImage: "/api/placeholder/200/300",
    category: "History"
  },
  {
    id: 6,
    title: "Modern Muslim Living",
    author: "Dr. Zainab Ahmed",
    description: "Guide to practicing Islam in contemporary society.",
    coverImage: "/api/placeholder/200/300",
    category: "Contemporary"
  }
];

const Header = () => (
  <div className="navbar bg-primary text-primary-content shadow-lg">
    <div className="container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Jamshaid Islamic Research Center</a>
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Books</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Books</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const BookCard = ({ book }) => (
  <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
    <figure>
      <img src={book.coverImage} alt={book.title} className="h-48 w-full object-cover" />
    </figure>
    <div className="card-body">
      <div className="badge badge-primary">{book.category}</div>
      <h2 className="card-title">{book.title}</h2>
      <p className="text-sm text-gray-600">By {book.author}</p>
      <p className="text-sm">{book.description}</p>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer p-10 bg-neutral text-neutral-content">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <span className="footer-title">Contact Us</span> 
        <p>Email: contact@jirc.org</p>
        <p>Phone: +92 123 456 7890</p>
        <p>Address: Research Center Road, City</p>
      </div> 
      <div>
        <span className="footer-title">Quick Links</span> 
        <a className="link link-hover">About Us</a> 
        <a className="link link-hover">Research Papers</a> 
        <a className="link link-hover">Publications</a> 
        <a className="link link-hover">Events</a>
      </div> 
      <div>
        <span className="footer-title">Newsletter</span> 
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-neutral-content">Subscribe to our newsletter</span>
          </label> 
          <div className="join">
            <input type="text" placeholder="Enter your email" className="input input-bordered join-item w-full" /> 
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Publications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
