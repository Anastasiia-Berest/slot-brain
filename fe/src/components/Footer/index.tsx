import Link from "next/link"
import Logo from "@/components/Logo"
import Telegram from "@/components/Telegram"

import TmIcon from "@/assets/icons/tm.svg"
import FbIcon from "@/assets/icons/fb.svg"
import ImIcon from "@/assets/icons/im.svg"

const soc = [
    {
        icon: <TmIcon width="18" height="18" />,
        title: "telegram",
        url: "/"
    },
    {
        icon: <ImIcon width="18" height="18" />,
        title: "instagram",
        url: "/"
    },
    {
        icon: <FbIcon width="18" height="18" />,
        title: "facebook",
        url: "/"
    },
]


const menu = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Casino Reviews",
        url: "/casinos",
        links: [
            {
                title: "Top Paying Casinos",
                url: "/"
            },
            {
                title: "The real machines.",
                url: "/"
            }
        ]
    },
    {
        title: "Bonuses",
        url: "/bonuses",
        links: [
            {
                title: "Read LevelUp",
                url: "/"
            },
            {
                title: "Read Stay Casino",
                url: "/"
            },
            {
                title: "Read Sloto zen",
                url: "/"
            }
        ]
    },
    {
        title: "Games",
        url: "/games",
        links: [
            {
                title: "Weekly Cashback",
                url: "/"
            },
            {
                title: "Gongratulations",
                url: "/"
            }
        ]
    },
    {
        title: "Blog",
        url: "/blog"
    }
]



const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="col">
                        <Logo />
                        <Telegram type="sm" />
                    </div>
                    <div className="col">
                        <nav className="nav">
                            {menu.map((i: any, ind: number) => (
                                <div className="nav-col" key={ind}>
                                    <Link href={i.url} >{i.title}</Link>
                                    {i.links ? <ul>
                                        {i.links?.map((j: any, ind: number) => (
                                            <li key={ind}><Link href={j.url}>{j.title}</Link></li>
                                        ))}
                                    </ul> : null}
                                </div>
                            ))}
                        </nav>
                    </div>
                    <div className="col">
                        <p>Contact:</p>

                        <div className="soc">
                            {soc.map((i: any, ind: number) => (
                                <Link href={i.url} key={ind}>
                                    {i.icon}
                                </Link>
                            ))}
                        </div>

                    </div>

                </div>
                <div className="footer-mdl">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-service">Terms of Service</Link>
                    <Link href="/responsible-gaming">Responsible Gaming</Link>
                </div>
                <div className="footer-btm">
                    <p>&copy; Copyright 2024 - Slot brain All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
