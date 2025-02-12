import TwitterFollowCard from './assets/components/TwitterFollowCard'
export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="@josesantillan"
        name="José Santillán"
        isFollowing={true}
        avatar="https://unavatar.io/josesantillan97" />
    </>
  )
}