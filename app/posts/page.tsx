import React from 'react'

//disponible sur /user

//statis metadat
// export const metadata={
//     title:'Home',
// }

//
export async function generateMetadata({params,searchparams}){
    const product="title";
    return {title:product}
}

const Page=() => {

    return(
        <div>Page User</div>
    )
}

export default Page