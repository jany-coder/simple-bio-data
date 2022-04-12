function BioData(props) {
  const { name, email, phone, skills, hobby, reference } = props.bioData;
  return (
    <div className="container mx-auto px-60 mt-4">
      <div className="border border-gray-400 px-10 py-4 rounded-xl bg-gray-900 text-white">
        <h2 className="text-2xl font-medium text-center">Bio Data of {name}</h2>
        <div className="personal-info">
          <h2 className="text-lg font-medium">Personal Information</h2>
          <p className="text-lg font-light"><span className="font-medium">Name:</span> {name}</p>
          <p className="text-lg font-light"><span className="font-medium">Email:</span> {email}</p>
          <p className="text-lg font-light"><span className="font-medium">Phone:</span> {phone}</p>
        </div>
        <div className="skills">
          <h2 className="text-lg font-medium">Skills</h2>
          <ul className="flex gap-2 font-light text-lg">
            {skills.map((skill) => (
              <li>{skill},</li>
            ))}
          </ul>
        </div>
        <div className="interests">
        <h2 className="text-lg font-medium">Skills</h2>
          <ul className="flex gap-2 font-light text-lg">
            {hobby.map((hobby) => (
              <li>{hobby},</li>
            ))}
          </ul>
        </div>
        <p className="mt-4">Referenced By: {reference}</p>
      </div>
    </div>
  );
}

export default BioData;
