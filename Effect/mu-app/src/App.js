import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
function App() {
  const [num, setNum] = useState(0);
  const [searchvalue,setSearchValue] = useState();
  const counting = () => {
    setNum((cnt) => cnt + 1)
  }
  const search=(e)=>{
    setSearchValue(e.target.value);
  }
  const runOnlyOnce = () => {
    console.log('1번만 동작')
  }
  console.log('계속 동작 중');
  useEffect(runOnlyOnce, [])
  return (
    <div>
      <input value = {searchvalue} type="text" placeholder='검색' onChange={search}/>
      <h1>숫자세기</h1>
      <button onClick={counting}>버튼</button>
      <div>{num}</div>
    </div>
  )
}

export default App;
