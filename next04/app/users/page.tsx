import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
    title:"Users",
}

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    
    const user = await usersData

    const content = (
        <section>
            <h2>
                <Link href="/" className="font-extrabold">Back to Home</Link>
            </h2>
            <br/>
            {(await usersData).map(user => {
                return(
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br/>
                    </>
                )
            })}
        </section>
    )
        return content
}
