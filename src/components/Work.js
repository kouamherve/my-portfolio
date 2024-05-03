import CardWork from "./reusable-ui/CardWork";

export default function Work() {
  return (
    <section id="work" className=" font-Poppins mx-4 mb-20">
      <div className=" flex flex-col items-center justify-center">
        <div className=" text-center mb-14">
          <h1 className="text-2xl uppercase font-normal mt-16 mb-2">
            What I've done
          </h1>
          <h3 className=" text-xs font-thin">(more coming soon)</h3>
        </div>
        <div>
          <CardWork
            title="coursesource"
            imageProjet="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            imageProjet="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            imageProjet="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            imageProjet="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
          <CardWork
            title="coursesource"
            imageProjet="https://cdn.pixabay.com/photo/2018/07/25/20/29/ecommerce-3562191_1280.jpg"
          />
        </div>
      </div>
    </section>
  );
}
