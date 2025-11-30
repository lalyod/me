const projects = [
  {
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
    title: 'Watui',
    excerpt:
      "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
    title: 'Watui',
    excerpt:
      "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png',
    title: 'Watui',
    excerpt:
      "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  },
]

const Project = () => {
  return (
    <div className="py-10">
      <h3 className="text-3xl text-center">My Projects</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div className="group pop-in bg-white p-3 transition-all hover:shadow-xl rounded-xl">
            <div className="overflow-hidden h-52 w-full">
              <img
                className="transition-all duration-300 group-hover:scale-110 rounded-xl h-52 w-full object-cover"
                src={project.thumbnail}
              />
            </div>
            <div className="px-2 py-3">
              <h3 className="line-clamp-2 text-lg font-medium">
                {project.title}
              </h3>
              <p className="line-clamp-3 text-sm text-gray-600">
                {project.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
