import { FC } from 'react'

import styles from './CarouselItem.module.css'

const SIZES = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

const CarouselVariations: FC = () => {
	return (
		<div className={styles.vatiations}>
			{SIZES.map(size => (
				<button key={size} className={styles.vatiations_button}>
					{size}
				</button>
			))}
		</div>
	)
}

export default CarouselVariations
