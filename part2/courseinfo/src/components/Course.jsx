const Header = (props) => {
  props = props.course
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  const course = props.course
  return (
    <div>
      {course.parts.map(c => 
        <Part key={c.id} part = {c} />
      )}
    </div>
  )
}

const Total = (props) => {
  props = props.course.parts;
  const totalWithReduce = props.reduce((s, p) => {
    return s + p.exercises
  }, 0)
  
  return (
    <div>
      <p>Number of exercises {totalWithReduce}</p>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course