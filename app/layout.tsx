"use client";
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Notion-clone',
//   description: 'Created by Akhilesh',
//   // icons:{
//   //   icon:[
//   //     {
//   //       media :"(prefer-color-scheme:light)",
//   //       url:"",
//   //       href:"",
//   //     },
//   //     {
//   //       media :"(prefer-color-scheme:light)",
//   //       url:"",
//   //       href:"",
//   //     },
//   //   ]
//   // }   //in future if you want to add your logo on at the top

// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'  suppressContentEditableWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider 
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      storageKey='jotion-theme-2'
      >
        <Toaster position='bottom-center'/>
      {children}
      </ThemeProvider>
      </ConvexClientProvider>

      </body>
  
    </html>
  );
}

