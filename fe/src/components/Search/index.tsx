import SearchIcon from "@/assets/icons/search.svg"

import styles from "./styles.module.sass"

export default function Search({ placeholder, type = "sm", setSearchValue }: any) {
    return (
        <div className={styles.search_wrap}>
            <form action="/" method="GET" noValidate className={`${styles.search} ${styles[type]}`} onSubmit={(e) => e.preventDefault()}>
                <input type="search" className={styles.search_input} placeholder={placeholder} onChange={(e) => setSearchValue(e.target.value)} />
                <button type="submit" className={styles.search_btn}>
                    <SearchIcon width="24" height="24" />
                </button>
            </form>
        </div>

    );
}