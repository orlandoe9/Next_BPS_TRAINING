export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        <main className="min-h-screen grid place-content-center bg-[#333]">
        <nav>About NavBar</nav>
            {children}
        </main>
    </>
  )
}
