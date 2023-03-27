import React from "react";

function Course(props) {
  const {
    courseTitle,
    courseDescription,
    courseMRP,
    courseCurrentPrice,
    courseContent,
  } = props;
  return (
    <div>
      <h1>{courseTitle}</h1>
      <p>{courseDescription}</p>
      <p>
        Price: <del>{courseMRP}</del> {courseCurrentPrice}
      </p>
      <ul>
        {courseContent.map((content) => (
          <li key={content.id}>
            <h2>{content.mainTitle}</h2>
            <ul>
              {content.subTitles.map((subtitle) => (
                <li key={subtitle}>{subtitle}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Course;
