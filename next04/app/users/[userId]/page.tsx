import getUser from "@/lib/getUser"
import getAllUsers from "@/lib/getAllUsers";
import getUserPosts from "@/lib/getUserPosts"
import UserPosts from "./components/UserPosts"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Metadata } from "next"
type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata ({ params : { userId } }:
    Params): Promise<Metadata> {
        const userData: Promise<User> = getUser(userId)
        const user: User = await userData
        
        if (!user?.name) {
            return {
                title: "User Not Found"
            }
        }

        return {
            title: user.name,
            description: `This is the page of ${user.name}`
        }
    }

export default async function UserPage({ params: { userId }}: Params){
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    //const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    if (!user?.name) return notFound()
    
    return (
    <>
            <h2>{user.name}</h2>       
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData}/>
            </Suspense>
            <Link href="/users" className="font-extrabold">Back to Users</Link> 
    </>
    )
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    return users.map(user => ({
        userId: user.id.toString()}
    ))

}
