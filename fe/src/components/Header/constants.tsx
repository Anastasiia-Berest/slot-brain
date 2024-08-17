import IconTm from "@/assets/icons/tm.svg"
import IconIm from "@/assets/icons/im.svg"
import IconFb from "@/assets/icons/fb.svg"

const nav = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Casino Reviews",
        url: "/casinos"
    },
    {
        title: "Bonuses",
        url: "/bonuses"
    },
    {
        title: "Games",
        url: "/games"
    },
    {
        title: "Blog",
        url: "/blog"
    },
    {
        title: "Questions",
        url: "/faq"
    },
    {
        title: "Contact",
        url: "/contact"
    },

]

const contacts = [
    {
        title: "Telegram",
        icon: <IconTm />,
        url: "/"
    },
    {
        title: "Instagram",
        icon: <IconIm />,
        url: "/"
    },
    {
        title: "Facebook",
        icon: <IconFb />,
        url: "/"
    }
]

export { contacts, nav }
export default nav