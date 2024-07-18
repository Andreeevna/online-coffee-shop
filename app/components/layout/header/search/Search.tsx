'use client'
import { ConfigProvider, Input } from 'antd'

import { FC, useState } from 'react'

import styles from './Search.module.css'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<ConfigProvider
				theme={{
					components: {
						Input: {
							hoverBorderColor: 'transparent',
							activeBorderColor: 'none',
						},
					},
					token: {
						// Seed Token
						colorBorder: 'transparent',
						colorTextPlaceholder: '#B6B4B3',
						colorText: '#B6B4B3',
						fontSize: 16,
						paddingXXS: 4,

						// Alias Token
						colorBgContainer: 'transparent',
					},
				}}
			>
				<Input.Search
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder='search'
					allowClear
					className={styles.searchInput}
					enterButton={false}
				/>
				{/* <Input prefix={<SearchOutlined />} placeholder='Search' allowClear /> */}
			</ConfigProvider>
		</div>
	)
}

export default Search
