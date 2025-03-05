import blogone from "../assets/images/blogs/blog-1.jpeg";
import blogtwo from "../assets/images/blogs/blog-2.jpeg";
import blogthree from "../assets/images/blogs/blog-3.jpeg";
import recentblog1 from "../assets/images/blogs/recentblog-1.jpeg";
import recentblog2 from "../assets/images/blogs/recentblog-2.jpeg";
import recentblog3 from "../assets/images/blogs/recentblog-3.jpeg";
import recentblog4 from "../assets/images/blogs/recentblog-4.jpeg";
import preimumcatfood from "../assets/images/productlist/premium-cat-food.jpeg";
import premiumdogfood from "../assets/images/productlist/preimum-dog-food.jpeg";
import catbag from "../assets/images/productlist/cat-bag.jpeg";
import blogssponsers from "../assets/images/blogs/blogssponsers.png";
const BlogPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <BlogPosts />
          <Pagination />
          <Sponsors />
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <SearchBar />
          <Categories />
          <RecentPosts />
          <SaleProducts />
          <OtherProducts />
        </div>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Jan 20, 2023",
      author: "Curt Armes",
      category: "Fashion",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, lacus a vehicula ullamcorper, nisi nibh ultricies orci, quis aliquam sem nulla sit amet est.",
      imageUrl: blogone,
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      date: "Feb 15, 2023",
      author: "John Smith",
      category: "Travel",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, lacus a vehicula ullamcorper, nisi nibh ultricies orci, quis aliquam sem nulla sit amet est.",
      imageUrl: blogtwo,
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisi, mauris amet nisi.",
      date: "Mar 10, 2023",
      author: "Sarah Johnson",
      category: "Lifestyle",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, lacus a vehicula ullamcorper, nisi nibh ultricies orci, quis aliquam sem nulla sit amet est.",
      imageUrl: blogthree,
    },
  ];

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="mb-12">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="text-primary">{post.category}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          <h2 className="text-2xl font-medium text-primary mb-3">
            {post.title}
          </h2>

          <p className="text-gray-600 mb-4">{post.excerpt}</p>

          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-[30rem] object-cover rounded-md my-4"
          />

          <div className="flex items-center text-xs text-gray-500 mb-2 mt-4">
            <span className="text-primary">{post.category}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>

          <a href="#" className="text-primary font-medium hover:underline">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 my-8">
      <a href="#" className="bg-gray-200 px-3 py-1 rounded">
        1
      </a>
      <a href="#" className="px-3 py-1 rounded hover:bg-gray-200">
        2
      </a>
      <a href="#" className="px-3 py-1 rounded hover:bg-gray-200">
        3
      </a>
      <a href="#" className="px-3 py-1 rounded hover:bg-gray-200">
        4
      </a>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-between items-center my-12 opacity-50">
      <img src={blogssponsers} alt="Sponsor 2" className="" />
      {/* <img
        src="/placeholder.svg?height=50&width=100"
        alt="Sponsor 1"
        className="h-8"
      />
      <img
        src="/placeholder.svg?height=50&width=100"
        alt="Sponsor 3"
        className="h-8"
      />
      <img
        src="/placeholder.svg?height=50&width=100"
        alt="Sponsor 4"
        className="h-8"
      /> */}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-2">Search</h3>
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Search..."
      />
    </div>
  );
};

const Categories = () => {
  const categories = [
    { name: "Fashion", count: 24 },
    { name: "Travel", count: 15 },
    { name: "Music", count: 12 },
    { name: "News", count: 10 },
    { name: "Life", count: 25 },
    { name: "Food", count: 30 },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-3">Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-primary hover:underline cursor-pointer">
              {category.name}
            </span>
            <span className="text-gray-500">({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: "It is a long established fact that a reader",
      imageUrl: recentblog1,
    },
    {
      id: 2,
      title: "It is a long established fact that a reader",
      imageUrl: recentblog2,
    },
    {
      id: 3,
      title: "It is a long established fact that a reader",
      imageUrl: recentblog3,
    },
    {
      id: 4,
      title: "It is a long established fact that a reader",
      imageUrl: recentblog4,
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-primary mb-3">Recent Post</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-3">
            <img
              src={post.imageUrl || "/placeholder.svg"}
              alt={post.title}
              className="w-20 h-16 object-cover rounded"
            />
            <p className="text-sm">{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SaleProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cat food for small cats",
      price: 25.0,
      salePrice: 20.0,
      imageUrl: preimumcatfood,
    },
    {
      id: 2,
      name: "Various types of cat food",
      price: 30.0,
      salePrice: 25.0,
      imageUrl: preimumcatfood,
    },
    {
      id: 3,
      name: "Meow meow fresh food",
      price: 35.0,
      salePrice: 30.0,
      imageUrl: preimumcatfood,
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-primary mb-3">Sale Product</h3>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex gap-3">
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="w-20 h-16 object-cover rounded"
            />
            <div>
              <p className="text-sm">{product.name}</p>
              <div className="flex gap-2 items-center mt-1">
                <span className="line-through text-gray-500 text-xs">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-primary">
                  ${product.salePrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OtherProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cat Bed Luxury",
      price: 45.0,
      imageUrl: catbag,
    },
    {
      id: 2,
      name: "KICHI Cat Food",
      price: 25.0,
      imageUrl: preimumcatfood,
    },
    {
      id: 3,
      name: "Dog Bed",
      price: 35.0,
      imageUrl: premiumdogfood,
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-primary mb-3">Other products</h3>
      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-2"
          >
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-sm">{product.name}</p>
            <div className="flex justify-between items-center mt-1">
              <span className="text-primary">${product.price.toFixed(2)}</span>
              <button className="border border-primary  text-red-500 font-medium  text-xs px-2 py-1 rounded-full">
                Unavailable
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
