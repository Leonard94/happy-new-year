import styles from "./styles.module.scss";
import { CloseIcon } from "../../assets/CloseIcon";

type TProps = {
  children: JSX.Element;
  title: string;
  onClose: () => void;
};

export const Window: React.FC<TProps> = ({ children, title, onClose }) => {
  return (
    <div className={styles.window}>
      <div className={styles.window__header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.controls}>
          <span onClick={onClose}>
            <CloseIcon />
          </span>
        </div>
      </div>
      <div className={styles.window__content}>{children}</div>
    </div>
  );
};
