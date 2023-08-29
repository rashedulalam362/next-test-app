'use client';
function Show_cookie({cookie}) {
    const clickHandler=()=>{
        console.log(cookie)
        alert(`The theme is: ${cookie}`)
    }
    return (
    
    <div className="flex justify-center mt-5">
      <button onClick={clickHandler} className="bg-green-300 p-3 text-centre rounded-md ">Show-Cookie</button>  
    </div>
  )
}

export default Show_cookie