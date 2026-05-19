import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import EdgeFrame from '@/components/EdgeFrame'

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <EdgeFrame />
      <Nav />
      <main style={{ paddingTop: '60px' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
