import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const TagPage = ({ params } : Params) => {
    return (
      <div>
        <h1>Tag {params.tag} Page</h1>
      </div>
    )
  }
  
  export default TagPage;