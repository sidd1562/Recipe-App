import style from '../../css/innercontainer.module.css'

export default function InnerContainer({ children }) {
  return <div className={style.InnerContainer}>{children}</div>;
}
