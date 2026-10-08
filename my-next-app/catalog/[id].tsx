import { useRouter } from "next/router"

function Catalogdetails() {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div className="page">
            <h1 className="title">Product Details</h1>
        </div>
    )
}

export default Catalogdetails