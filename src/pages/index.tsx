// Packages imports
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
// SCSS imports
import styles from '../styles/index.module.scss'
import { convertSecondsToHoursString } from '../utils/convertSecondsToHoursString'


// Get data from server.json
export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('http://localhost:3333/episodes?_limit=11&_sort=publishedAt&_order=desc')
    const data = await response.json()

    const epsodes = data.map(epsode => {
        return {
            id: epsode.id,
            title: epsode.title,
            thumbnail: epsode.thumbnail,
            description: epsode.description,
            publishedAt: format(parseISO(epsode.publishedAt), 'd MMM yy', {locale: ptBR}),
            url: epsode.file.url,
            duration: Number(epsode.file.duration),
            durationAsHoursString: convertSecondsToHoursString(Number(epsode.file.duration))
        }
    })

    return {
        props: {
            epsodes
        },
        revalidate: 60 * 60 * 8, 
    }
}

// Typing data
type Epsode = {
    id: string,
    title: string,
    thumbnail: string,
    description: string,
    publishedAt: string,
    url: string,
    duration: number,
    durationAsHoursString: string

}
type dataProps = {
    epsodes: Epsode[]
}



export default function Index (props: dataProps) {

    const allEpsodes = props.epsodes.slice(1, props.epsodes.length)

    return (
        <div className={styles.feed}>
            <section className={styles.newEpsode}>
                <h2>Último lançamento</h2>
                <div className={`${styles.card} ${styles.destaque}`}>
                    <div className={styles.imgContainer}>
                        <Image
                            src={props.epsodes[0].thumbnail}
                            alt={props.epsodes[0].title}
                            width={500}
                            height={500}
                            objectFit='cover'
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.descriptionContainer}>
                            <h3>{props.epsodes[0].title}</h3>
                            <p>{props.epsodes[0].description}</p>
                        </div>
                        <div className={styles.infoContainer}>
                            <span>{props.epsodes[0].durationAsHoursString}</span>
                            <span>{props.epsodes[0].publishedAt}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.allEpsodes}>
                <h2>Outros epsódios</h2>
                <ul>
                    {allEpsodes.map(epsode => {
                        return (
                            <li key={epsode.id} className={styles.card}>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={epsode.thumbnail}
                                        alt={epsode.title}
                                        width={500}
                                        height={500}
                                        objectFit='cover'
                                    />
                                </div>
                                <div className={styles.textContainer}>
                                    <div className={styles.descriptionContainer}>
                                        <h3>{epsode.title}</h3>
                                        <p>{epsode.description}</p>
                                    </div>
                                    <div className={styles.infoContainer}>
                                        <span>{epsode.durationAsHoursString}</span>
                                        <span>{epsode.publishedAt}</span>
                                    </div>
                                </div>
                            </li> 
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}
