import type { StrapiSchema } from '~/lib/strapi'

import type { Rate } from './rate'
import type { Media } from './image'

type CarCharacteristicBase = {
	name: string
}

type CarCharacteristicExtended = {
	icon: Media
	description: string
}

type CarCharacteristic<Extended = true> = StrapiSchema<
	CarCharacteristicBase & (Extended extends true ? CarCharacteristicExtended : {})
>

type CarConditon = StrapiSchema<{
	name: string
}>

type CarColorImage = StrapiSchema<{
	color: string
	image: Media
	colorImage: Media | null
}>

type CarType = StrapiSchema<{
	name: string
	image?: Media | null | undefined
}>

type Car = StrapiSchema<{
	name: string
	minMinuteRate: number

	orderID?: number
	isNew?: boolean
	isHot?: boolean
	isWrapped?: boolean

	carType: CarType

	previewImage: Media

	rates: Rate[]

	sideImages: CarColorImage[]

	conditions: CarConditon[]
	characteristics: StrapiSchema<{
		mainFeatures: CarCharacteristic<true>[]
		otherFeatures: CarCharacteristic<false>[]
	}>
}>

type CarId = Pick<Car, 'id' | 'name' | 'isWrapped'>

type CarMetadata = Pick<Car, 'name' | 'carType' | 'minMinuteRate' | 'previewImage'>

type CarPreview = Pick<
	Car,
	| 'name'
	| 'minMinuteRate'
	| 'isWrapped'
	| 'isNew'
	| 'isHot'
	| 'carType'
	| 'id'
	| 'previewImage'
	| 'orderID'
>

export type {
	Car,
	CarId,
	CarConditon,
	CarType,
	CarPreview,
	CarMetadata,
	CarColorImage,
	CarCharacteristic,
}
