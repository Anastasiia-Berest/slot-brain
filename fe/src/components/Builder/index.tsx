import styles from "./styles.module.sass"
import { marked } from 'marked'

export default function Builder({ data }: any) {
    //console.log(data)
    return (
        <>
            {data.builder?.map((el: any, ind: number) => {
                {
                    switch (el.__component) {
                        case 'builder.markdown':
                            return (
                                <>{el.show === false ? null : <div
                                    className=""
                                    key={`${el.id}${ind}`}
                                    dangerouslySetInnerHTML={{
                                        __html: marked(el.content || ''),
                                    }}
                                />}</>
                            )
                        case 'builder.quote':
                            return (
                                <div
                                    className={styles.quote}
                                    key={`${el.id}${ind}`}
                                >
                                    <div className={styles.quote_title}>{el.title}</div>
                                    <blockquote dangerouslySetInnerHTML={{
                                        __html: marked(el.description || ''),
                                    }}></blockquote>
                                    {el.author && <p>{el.author}</p>}
                                </div>

                            )
                        case 'builder.game-table':
                            return (
                                <div
                                    className={styles.table}
                                    key={`${el.id}${ind}`}
                                >
                                    <table>
                                        <tr>
                                            <th>Casino Type</th>
                                            <td>{data.casino_type?.data.attributes.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Profit</th>
                                            <td>{data.profit}</td>
                                        </tr>
                                        <tr>
                                            <th>License</th>
                                            <td>{data.licence?.data.attributes.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Providers</th>
                                            <td>{data.casino_providers?.data?.map((i: any, ind: number) => (<span key={ind}>{i.attributes.name}</span>))}</td>
                                        </tr>
                                        <tr>
                                            <th>Payment Methods</th>
                                            <td>{data.payment_methods?.data?.map((i: any, ind: number) => (<span key={ind}>{i.attributes.name}</span>))}</td>
                                        </tr>
                                        <tr>
                                            <th>WithDraw Methods</th>
                                            <td>{data?.currencies?.data?.map((i: any, ind: number) => (<span key="ind">{i.attributes.code}</span>))}</td>
                                        </tr>
                                        {data.languages?.data.length > 0 && <tr>
                                            <th>Languages</th>
                                            <td>{data.languages.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.name ? i.attributes.name : 'n/d'}</span>))}</td>
                                        </tr>}
                                        <tr>
                                            <th>Mobile Apps</th>
                                            <td>{data.apps?.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.name}</span>))}</td>
                                        </tr>
                                        <tr>
                                            <th>Accept Players From</th>
                                            <td>{data.countries?.data.map((i: any, ind: number) => (
                                                <span key={ind}>{i.attributes.code}</span>
                                            ))}</td>
                                        </tr>
                                        <tr>
                                            <th>Number of Games</th>
                                            <td>{el.Number_of_Games}</td>
                                        </tr>
                                        <tr>
                                            <th>Game Types</th>
                                            <td>{data.game_types?.data.map((i: any, ind: number) => (<span key={ind}>{i.attributes.name}</span>))}</td>
                                        </tr>
                                        <tr>
                                            <th>Year launched</th>
                                            <td>{el.Year_launched}</td>
                                        </tr>
                                        <tr>
                                            <th>Support Email</th>
                                            <td>{el.Support_Email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone Number</th>
                                            <td>{el.Phone_Number}</td>
                                        </tr>
                                        <tr>
                                            <th>Owner</th>
                                            <td>{el.Owner}</td>
                                        </tr>
                                    </table>
                                </div>

                            )
                        default:
                            break

                    }
                }

            })}


        </>
    )
}