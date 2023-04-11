import { useRouter } from "next/router";


const SelectedClientProjectPage = () => {

    const router = useRouter()
    console.log(router.query)
    return ( <div>
        <h1>the project page for a specific prrroject for a slected client</h1>
    </div> );
}
 
export default SelectedClientProjectPage;