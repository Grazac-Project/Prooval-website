import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


const Loading = () => {
  return (
    <SkeletonTheme>
        <Skeleton style={{ width: '200px'}}/>
        <Skeleton style={{width: '200px'}}/>
        <Skeleton style={{ width: '200px'}}/>
        <Skeleton style={{ width: '200px'}}/>
        <Skeleton style={{ width: '200px'}}/>
    </SkeletonTheme>
  )
}

export default Loading