import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';

const css: React.CSSProperties = { maxWidth: '1024px', border: '1px dashed', }

const Home: NextPage = () => {
    function onLoadComplete() {
        alert('loaded')
    }

    return (
        <div>
            <style jsx global>{`
                .title {
                    color: red;
                    font-size: 40px;
                }

                .title:hover {
                    color: purple;
                }

                .centered-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 600px) {
                    .title {
                        color: cyan;
                    }
                }
            `}</style>

            <div style={css}>
                <Image 
                    layout="responsive"
                    objectFit="cover"
                    src="/images/react.png" 
                    width={600} 
                    height={600} 
                    alt="React keychain"
                    placeholder="blur"
                    quality={70}
                    onLoadingComplete={onLoadComplete}
                />
            </div>

            <div className="centered-page">
                <h2 className="text-3xl font-bold underline">
                    Hello world!
                </h2>
                <button className="btn btn-primary">CLICK ME</button>
                <MyComponent />
            </div>
        </div>
    )
}

export default Home

function MyComponent() {
    return <div>
        <h2 className="title">Child Title</h2>
    </div>
}