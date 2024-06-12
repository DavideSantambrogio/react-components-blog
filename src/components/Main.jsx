import React from "react";
import styles from "../style/Main.module.css";
import data from "../../data/data.json";

export default () => {
    return (
        <>
            <main className={styles.container}>
                {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img className={styles.image} src={item.img} alt={`immagine di ${item.title}`} />
                        <div className={styles.txtContainer}>
                            <h3>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                            <div className={styles.button}>LEGGI DI PIÙ</div>
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}
