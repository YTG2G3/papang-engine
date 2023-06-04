import './globals.css';
import { Providers } from './providers';

export const metadata = {
    title: 'Papang Engine',
    description: 'Text-based online game generation with GPT.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
