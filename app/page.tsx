import Image from 'next/image'

export default function Home() {
  return (
      <div>
          <header className="bg-orange-500 text-white py-4 text-center">
              <h1 className="text-3xl">MicroMarket: Revolutionizing Small Business Online Presence</h1>
          </header>
          <main className="max-w-3xl mx-auto mt-4 p-4 bg-white rounded shadow-md">
              <h2 className="text-teal-500 mt-4">Key Points</h2>
              <ul className="list-disc pl-4">
                  <li>Traditional marketplaces often limit businesses to showcasing products only, but MicroMarket goes beyond that by providing a full-fledged marketplace experience.</li>
                  <li>Small businesses no longer need to create individual websites; MicroMarket eliminates the need for complex website development.</li>
                  <li>With MicroMarket, entrepreneurs can effortlessly showcase and manage their products, reaching a wider audience and expanding their brand presence.</li>
              </ul>

              <h2 className="text-teal-500 mt-4">Benefits</h2>
              <ul className="list-disc pl-4">
                  <li>Comprehensive solution for small business online presence.</li>
                  <li>Enhanced customer engagement through advanced marketplace functionality.</li>
                  <li>Streamlined product management and customization options.</li>
                  <li>Integrated marketing tools for increased brand visibility.</li>
              </ul>

              <h2 className="text-teal-500 mt-4">Cutting-Edge Technology</h2>
              <ul className="list-disc pl-4">
                  <li><strong>Backend:</strong> Our backend is built using Spring Boot, a powerful and flexible framework that provides a robust foundation for microservices architecture. This enables seamless scalability, fault tolerance, and efficient handling of business logic.</li>
                  <li><strong>Frontend:</strong> The frontend is crafted using Next.js, a popular React framework that offers server-side rendering, enhanced performance, and a delightful user experience. With Next.js, we ensure a responsive and dynamic interface for your customers.</li>
              </ul>

              <h2 className="text-teal-500 mt-4">Join MicroMarket Today!</h2>
              <p>Embrace MicroMarket and embark on a journey of growth and success! Our platform empowers small businesses to thrive in the digital landscape. Say goodbye to limitations and unleash your full potential with MicroMarket.</p>
              <div className="text-center">
                  <img src="path/to/logo.png" alt="MicroMarket Logo" className="block max-w-full mx-auto rounded shadow-md" style={{ maxWidth: '200px' }} />
              </div>
          </main>
      </div>
  )
}
