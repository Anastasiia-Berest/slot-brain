import styles from "./styles.module.sass"

export default function Form() {
    return (
        <form className={styles.form} action="/" method="POST" noValidate>
            <div className={styles.form_field}>
                <label htmlFor="email" className="sr-only">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className=""
                    placeholder="Subscribe to our newsletter"
                />
            </div>
            <button
                type="submit"
                className=""
            >
                Send
            </button>
        </form>
    )
}