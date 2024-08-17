import Select from 'react-select'
import styles from "./styles.module.sass"
import { filter_by_provider, filter_by_type, order } from "./constants"

export default function Sidebar() {
    return (
        <aside className={styles.cards_filters}>
            <div className={styles.cards_action}>
                <h2>Filters</h2>
                <div>
                    <span>Order By:</span>
                    <Select options={order} />

                </div>
                <div>
                    <span><b>Casino By</b> Provider:</span>
                    <Select options={filter_by_provider} />

                </div>
                <div>
                    <span><b>Casino By</b> Type:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Licences:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Payment Methods:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Currencies:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> GEO:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Languages:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Games:</span>
                    <Select options={filter_by_type} />
                </div>
                <div>
                    <span><b>Casino By</b> Bonuses:</span>
                    <Select options={filter_by_type} />
                </div>
            </div>
        </aside>
    )
}