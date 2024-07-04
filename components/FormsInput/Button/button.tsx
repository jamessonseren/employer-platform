import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

import { Loader } from 'lucide-react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode
}
export function ButtonComp({ loading, children, ...rest }: ButtonProps) {
    return (
        <button
            className={styles.button}
            disabled={loading}
            {...rest}
        >
            {loading ? (
                // <FaSpinner color="#fff" size={16} />
                <Loader />
            ) : (<a className={styles.buttonText}>
                {children}
            </a>)
            }

        </button>
    )
}