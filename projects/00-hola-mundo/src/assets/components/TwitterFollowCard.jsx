import '../../App.css'
export default function TwitterFollowCard({ userName, name, isFollowing, avatar }) {
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					className='tw-followCard-avatar'
					src={avatar}
					alt="avatar"
				/>
				<div className="tw-followCard-info">
					<strong>{name}</strong>
					<span className="tw-followCard-infoUserName">{userName}</span>
				</div>
			</header>

			<aside>
				<button className="tw-followCard-button">
					Seguir
				</button>
			</aside>
		</article>
	)
}