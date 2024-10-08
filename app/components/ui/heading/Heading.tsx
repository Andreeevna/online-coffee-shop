import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => {
	return (
		<h1
			className={clsx(
				'font-black text-green text-5xl w-1/2 ml-auto',
				className
			)}
		>
			{children}
		</h1>
	)
}

export default Heading
