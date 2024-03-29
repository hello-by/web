import { ZonesAPI } from '~/shared/entities/zones'

const fetchZones = async () => {
	const json = (await fetch('https://hellominsk1.cartrek.online/api/zones', {
		next: { revalidate: 60 * 60 * 24 },
	}).then((res) => res.json())) as ZonesAPI

	return json.rentEndZones.map(({ points }) => {
		return points.map(([lng, lat]) => ({ lat, lng }))
	})
}

type ZonesType = Awaited<ReturnType<typeof fetchZones>>

export { fetchZones }
export type { ZonesType }
