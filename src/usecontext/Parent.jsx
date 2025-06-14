import Child from './Child'

const Parent = (props) => {
    const {name,age}=props
  return (
    <div>Parent
        <Child name={name} age={age}/>
    </div>
  )
}

export default Parent