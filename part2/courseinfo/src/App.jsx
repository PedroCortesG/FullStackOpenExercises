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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'asd',
        exercises: 12,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App