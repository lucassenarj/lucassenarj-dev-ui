import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const CategoryPage = ({ params } : Params) => {
    return (
      <div>
        <h1>Category {params.category} Page</h1>
      </div>
    )
  }
  
  export default CategoryPage;