import styles from './ski-title-blurb.module.css'

export default function SkiTitleBlurnb({ title, blurb }) {
  return (
    <>
    <div className={styles.skiTitle}>{title}</div>
    <div className={styles.skiBlurb}>{blurb}</div>
    </>
  )
}