import CardWork from "./reusable-ui/CardWork";

export default function Work() {
  return (
    <section id="work" className=" font-Poppins mx-4 py-8">
      <div className=" flex flex-col items-center justify-center">
        <div className=" text-center mb-10 tracking-wider">
          <h1 className="uppercase text-2xl md:text-3xl text-black mt-16 mb-4">
            What I've done
          </h1>
          <h3 className=" text-sm font-light text-gray-500">
            (more coming soon)
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            image="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
        </div>
      </div>
    </section>
  );
}
