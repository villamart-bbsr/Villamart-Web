import {
  Tractor, Sun, Cloud, BookOpen, PenTool, ArrowRight, Leaf, Calendar, User
} from 'lucide-react';

export default function FarmerBlog() {
  // Static data
  const samplePosts = [
    {
      title: "The Secret Life of Strawberries: From Blossom to Berry",
      excerpt: "Discover the fascinating journey of strawberries and how to grow the juiciest, sweetest berries in your own garden.",
      author: "Jane Smith",
      date: "May 2, 2025",
      readTime: "5 min",
      category: "fruits",
      image: "/images/strawberries.jpg",
      color: "bg-red-100"
    },
    {
      title: "Heirloom Tomatoes: A Rainbow of Flavors",
      excerpt: "Explore the vibrant world of heirloom tomatoes and learn why these colorful varieties pack more flavor than their store-bought cousins.",
      author: "Mike Johnson",
      date: "April 28, 2025",
      readTime: "7 min",
      category: "vegetables",
      image: "/images/tomatoes.jpg",
      color: "bg-orange-100"
    },
    {
      title: "Companion Planting: Nature's Defense System",
      excerpt: "Maximize your harvest by understanding which plants grow well together and naturally repel pests without chemicals.",
      author: "Sarah Williams",
      date: "April 22, 2025",
      readTime: "6 min",
      category: "tips",
      image: "/images/planting.jpg",
      color: "bg-green-100"
    }
  ];

  const seasonalProduce = [
    { name: "Spring Asparagus", color: "bg-green-600" },
    { name: "Ripe Strawberries", color: "bg-red-500" },
    { name: "Sweet Corn", color: "bg-yellow-400" },
    { name: "Fresh Blueberries", color: "bg-indigo-600" },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans relative overflow-hidden">
      {/* Animated Background - Static Now */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute text-yellow-400" style={{ left: '50%', top: '15%' }}>
          <Sun size={64} />
        </div>
        <div className="absolute text-gray-200" style={{ left: '20%', top: '10%' }}>
          <Cloud size={64} />
        </div>
      </div>

      {/* Header */}
      <div className="pt-12 pb-6 text-center relative z-10">
        <div className="inline-block mb-4 relative">
          <Tractor size={48} className="inline-block text-green-600 mr-3" />
          <h1 className="text-5xl font-bold text-green-800 inline-block">Harvest Insights</h1>
        </div>
        <p className="text-xl text-green-700 max-w-2xl mx-auto mt-2">
          Where farming wisdom grows and agricultural knowledge flourishes
        </p>
      </div>

      {/* Season Banner */}
      <div className="relative z-10 bg-gradient-to-r from-green-50 to-emerald-50 py-4 mb-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center space-x-2 overflow-x-auto">
          <span className="text-green-800 font-semibold">Season's Bounty:</span>
          {seasonalProduce.map((item, i) => (
            <span key={i} className={`${item.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Growing A Community of Farmers
            </h2>
            <p className="text-lg text-green-700 mb-6">
              Join our thriving community of agricultural enthusiasts, from hobbyist gardeners to professional farmers. Share your knowledge, learn from others, and grow together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {/* Write Blog Button */}
              <button className="flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white text-green-700 border-2 border-green-600 shadow-md">
                <PenTool size={20} className="mr-2" />
                Write a Blog
              </button>

              {/* Read Blog Button */}
              <button className="flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-white text-amber-700 border-2 border-amber-600 shadow-md">
                <BookOpen size={20} className="mr-2" />
                Read Blogs
              </button>
            </div>
          </div>

          {/* Garden Image */}
          <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
            <div className="absolute inset-0">
              <img src="/images/media/media1.jpg" alt="Farm garden" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Sample Blogs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 flex items-center mb-6">
            <Leaf size={24} className="mr-2 text-green-600" />
            Sample Blog Posts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {samplePosts.map((post, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`h-40 relative overflow-hidden ${post.color}`}>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-green-800">
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-800 hover:text-green-600 transition-colors">{post.title}</h3>
                  <p className="text-green-600 mt-2 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-4 pt-2 border-t border-green-100 text-xs text-gray-500">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="w-full bg-gradient-to-r from-green-700 via-green-600 to-green-700 py-8 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Join Our Growing Community</h3>
          <p className="mb-4">Get seasonal growing tips, recipes, and more delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg text-green-800 flex-grow" />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-green-900 px-6 py-2 rounded-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}