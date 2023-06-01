import Header from "pages/components";
import PostList from "./components/PostList";
import Footer from "pages/components/Footer";

export default function Blogshow() {
    return (
      <div className="bg-white dark:bg-gray-500">
           <Header />
          <div className='p-5'>
       
    <div className="max-w-screen-lg mx-auto">
 <Header />
  {/* header ends here */}
  <main className="mt-12">
    {/* featured section */}
    <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
      {/* main post */}
      <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
        <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64" />
      
       
      </div>
      <div className="w-full md:w-4/7 mt-5">
       <PostList />
      </div>
    </div>
    <div className="rounded flex md:shadow mt-12">
      <img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="w-0 md:w-1/4 object-cover rounded-l" />
      <div className="px-4 py-2">
        <h3 className="text-3xl text-gray-800 font-bold">Subscribe to newsletter</h3>
        <p className="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from the oven</p>
        <form className="mt-4 mb-10">
          <input type="email" className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400" placeholder="john@tech.com" />
          <button className="px-4 py-2 rounded bg-green-800 text-gray-100">
            Subscribe
            <i className="bx bx-right-arrow-alt" />
          </button>
          <p className="text-green-900 opacity-50 text-sm mt-1">No spam. We promise</p>
        </form>
      </div>
    </div>
    {/* ens subscribe section */}
    {/* popular posts */}
    <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
      <h2 className="font-bold text-3xl">Popular news</h2>
      <a className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
        View all
      </a>
    </div>
    <div className="block space-x-0 lg:flex lg:space-x-6">
      <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
        <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
        <div className="p-4 pl-0">
          <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
          <p className="text-gray-700 mt-2">
            Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
            So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
          </p>
          <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
        </div>
      </div>
      <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
        <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
        <div className="p-4 pl-0">
          <h2 className="font-bold text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
          <p className="text-gray-700 mt-2">
            Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in. 
            Procured shutters mr it feelings. To or three offer house begin taken am at. 
          </p>
          <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
        </div>
      </div>
      <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
        <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
        <div className="p-4 pl-0">
          <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
          <p className="text-gray-700 mt-2">
            Alteration connection to so as collecting me. 
            Difficult in delivered extensive at direction allowance. 
            Alteration put use diminution can considered sentiments interested discretion.
          </p>
          <a href="#" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </a>
        </div>
      </div>
    </div>
    {/* end popular posts */}
  </main>
  {/* main ends here */}
  {/* footer */}

</div>
  <Footer />
        
      </div>
      </div>
      
    )
  }
  