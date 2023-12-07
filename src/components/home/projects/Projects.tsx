const ProjectsSection = () => {
  const projects = [
    {
      title: "Björkenäsgatan 27",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Fågelvägen 12",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Retoftavägen 9",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Fasadrenovering i Mark",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Lingonvägen 39",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Åsbogatan 7",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
    {
      title: "Påskliljevägen 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
      image: "https://info.helphero.se/wp-content/uploads/2020/09/malare.jpg",
    },
  ];
  return (
    <section className="bg-white text-black">
      <div className="max-w-screen-2xl px-4 pt-8 pb-12 mx-auto lg:gap-8 xl:gap-0 lg:py-16 w-full">
        <div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Projekt
          </h1>
          <p className="max-w-3xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl">
            Vi på Måleri Viskan är stolta över att ha arbetat med många olika kunder. Vår dedikation
            till kvalitet och noggrannhet är konsekvent, oavsett projektets omfattning. Vårt mål är
            att överträffa förväntningarna och skapa en långvarig tillfredsställelse för våra kunder
            genom att leverera professionella målningstjänster.
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-y-12 gap-x-6 lg:grid-rows-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${
                i === 0 || i === projects.length - 1 || i === projects.length - 2
                  ? "row-span-2 col-span-6"
                  : "col-span-3"
              } text-white`}
            >
              <div
                className={`min-h-[250px] h-full bg-cover bg-no-repeat bg-center text-white rounded-sm shadow-lg`}
                style={{
                  backgroundImage: `url('${project.image}')`,
                }}
              >
                <div className="flex flex-col justify-end h-full bg-gradient-to-t from-[#1919199f]" />
              </div>
              <h2 className="text-xl font-bold text-black">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
