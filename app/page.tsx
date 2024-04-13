"use client"
import Image from "next/image";
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

const EditorComp = dynamic(() => import('@/components/Editor'), { ssr: false })
import Nav from '@/components/Nav';
import Loading from '@/components/loading/page';
import MyComponent from '@/components/card/page';

const markdown = `
Hello **world**!
`

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(false);
  }, [])
  if (isLoading) return <Loading />;
  else
    return (
      <>
        <Nav
          props={{
            children:
              <>
              <MyComponent />
              </>
          }}
          aside={{
            children:
              <p>
                This is the aside content
              </p>
          }}
        />
      </>
    );
}
