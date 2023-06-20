import '../assets/css/globals.css'

export const metadata = {
  title: 'Inti',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <main className='mx-auto w-full max-w-[390px] px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
