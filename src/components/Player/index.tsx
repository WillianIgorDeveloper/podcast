//Packages imports
import { Play, Shuffle, SkipBack, SkipForward, Repeat } from "phosphor-react";
//SCSS imports
import styles from './style.module.scss'

export default function Player () {
    return (
        <aside className={styles.player}>
            <div className={styles.displayImage}>
                Selecione um episódio para ouvir
            </div>
            <div className={styles.mediaContainer}>
                <div className={styles.playerTimer}>
                    <span>00:00</span>
                    <div className={styles.timerBar}/>
                    <span>00:00</span>
                </div>
                <div className={styles.mediaIcons}>
                    <button>
                        <Shuffle size={25} weight="fill" />
                    </button>
                    <button>
                        <SkipBack size={25} weight="fill" />
                    </button>
                    <button>
                        <Play size={40} weight="fill" />    
                    </button>
                    <button>
                        <SkipForward size={25} weight="fill" />
                    </button>
                    <button>
                        <Repeat size={25} weight="fill" />   
                    </button>
                </div>
            </div>
        </aside>
    )
}