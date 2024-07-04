import styles from "./loading.module.css"

const LoadingComp = () => {
    return (
        <main className="w-full h-screen max-h-[500px] flex items-center justify-center">
            <section className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <span>Carregando</span>
            </section>
         
        </main>
    )
}

export default LoadingComp