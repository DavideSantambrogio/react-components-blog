import styles from "../style/Main.module.css";

export default () => {
    return (
        <>
            <main className={styles.container}>
                <div className={styles.card}>
                    <img className={styles.image} src="public\images\600x400.jpg" alt="" />
                    <div className={styles.txtContainer}>
                        <h3>Titolo del post</h3>
                        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum itaque iste repudiandae accusantium repellendus dolorum dolor exercitationem ipsum, ipsa cumque distinctio delectus, minus consequuntur soluta harum totam temporibus rerum reprehenderit?</p>
                        <div className={styles.button}>LEGGI DI PIÙ </div>
                    </div>

                </div>
            </main>
        </>
    )
}