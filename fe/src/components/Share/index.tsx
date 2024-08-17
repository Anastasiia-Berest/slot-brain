import { useState } from "react"
import styles from "./styles.module.sass"
import Link from "next/link"

import IconTm from "@/assets/icons/tm.svg"
import IconFb from "@/assets/icons/fb.svg"
import IconTw from "@/assets/icons/tw.svg"
import IconShare from "@/assets/icons/share-2.svg"

const socialNetworkButtons = [
    {
        title: 'telegram',
        icon: <IconTm width="20" height="20" />
    },
    {
        title: 'twitter',
        icon: <IconTw width="20" height="20" />
    },
    {
        title: 'facebook',
        icon: <IconFb width="20" height="20" />
    }
]


export default function Share({ copyUrl, copyTitle }: any) {

    const [isCopied, setIsCopied] = useState(false)

    async function copyUrlToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text)
        } else {
            return document.execCommand('copy', true, text)
        }
    }

    const handleCopyClick = () => {
        copyUrlToClipboard(copyUrl)
            .then(() => {
                setIsCopied(true)
                setTimeout(() => {
                    setIsCopied(false)
                }, 1000)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const current_url = copyUrl
    const current_title = copyTitle || ''
    let target_url = ''

    function set_url(type: string) {
        switch (type) {
            case 'telegram':
                target_url = `https://t.me/share/url?url=${current_url}&text=${current_title}`
                break
            case 'twitter':
                target_url =
                    'https://twitter.com/intent/tweet?text=' +
                    encodeURIComponent(current_url + '\n\n' + current_title)
                break
            case 'facebook':
                target_url =
                    `https://www.facebook.com/sharer/sharer.php?u=${current_url}&quote=${current_title}`
                break
            default:
                target_url = current_url
                break
        }
    }


    return (
        <>
            <div className={styles.share}>
                {socialNetworkButtons.map((i: any, ind: number) => {
                    set_url(i.title)
                    return (
                        <Link
                            href={target_url}
                            target="_blank"
                            key={ind}
                        >
                            {i.icon}
                        </Link>)
                })}
                <button onClick={handleCopyClick}>
                    <IconShare width="20" height="20" />
                </button>
            </div >
        </>

    )
}