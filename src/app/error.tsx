'use client' // Error components must be Client Components

import { useEffect, useCallback } from 'react'

import { Button } from '~/client/ui/components/Button'
import { SectionError } from '~/client/components/Section/SectionError'

import { InternalErrorImage } from '~/client/components/InternalErrorImage'

type ErrorProps = {
	error: Error & { digest?: string }
	reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
	const reload = useCallback(() => {
		reset()
		window.location.reload()
	}, [])

	useEffect(() => {
		console.info(error)
	}, [error])

	return (
		<SectionError>
			<InternalErrorImage />
			<Button
				color="primary"
				onClick={reload}>
				Перезагрузить страницу
			</Button>
		</SectionError>
	)
}

export default Error
