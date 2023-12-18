import { clsx } from '~/lib/clsx'
import type { StyleProps } from '~/lib/types'

import { FAQ_NAV_CONFIG } from '~/shared/config/nav'

import { Title } from '~/client/ui/components'

import { FaqNavLink } from './FaqNavLink'

const FaqNav = ({ className, ...props }: StyleProps) => (
	<nav
		{...props}
		className={clsx('space-y-5 md:space-y-10 ', className)}>
		<Title size={30}>{FAQ_NAV_CONFIG.title}</Title>
		<ul className="min-w-fit overflow-x-scroll py-5 flex items-center gap-1.5">
			{FAQ_NAV_CONFIG.options.map((link) => (
				<li
					key={link.href}
					className="w-max">
					<FaqNavLink {...link} />
				</li>
			))}
		</ul>
	</nav>
)

export { FaqNav }
