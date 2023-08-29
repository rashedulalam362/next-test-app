
import { cookies } from 'next/headers'
import Show_cookie from '../components/Show_cookie'

function page() {
    const cookieStore = cookies()
    const theme = cookieStore.get('theme')
    // console.log(theme.value)
    const {value} = theme
  return (
    <div className="mx auto">
      
   <Show_cookie cookie={value}/>
    </div>
  )
}

export default page