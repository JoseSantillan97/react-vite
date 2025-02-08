export function App(){
  return(
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
        className='tw-followCard-avatar'
        src="./../public/vite.svg"
        alt="avatar"
        />
        <div className="tw-followCard-info">
          <strong>José Santillán</strong>
          <span>@josesantillan</span>
        </div>
      </header>

      <aside>
        <button>
          Seguir
        </button>
        </aside>
    </article>
  )
}