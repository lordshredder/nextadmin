import { redirect } from "next/navigation";
const NotFound = () => {
    redirect("/dashboard");
}

export default NotFound