import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = () => {
  return (
    <SkeletonTheme>
        Loading .......
        <Skeleton style={{background: 'red'}}/>
    </SkeletonTheme>
  )
}

export default Loading