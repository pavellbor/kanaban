function App() {
  return (
    <div className="board-app">
      <header className="board-app__header">
        <div className="board-app__inner">
          <h1>Канбан-доска</h1>
        </div>
      </header>
      <main className="board-app__main">
        <div className="board-app__inner">
          <section className="add-task">
            <h2 className="visually-hidden">Добавить задачу</h2>
            <form className="add-task__form" ariaLabel="Форма добавления задачи">
              <div className="add-task__input-wrapper">
                <label for="add-task">Новая задача</label>
                <input type="text" name="task-name" id="add-task" placeholder="Название задачи..." required/>
              </div>
              <button className="add-task__button button" type="submit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" fill="white" />
                  <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"
                    fill="white" />
                </svg>
                <span>Добавить</span>
              </button>
            </form>
          </section>
          <section className="taskboard">
            <h2 className="visually-hidden">Ваши задачи:</h2>
            <article className="taskboard__group taskboard__group--backlog">
              <h3 className="taskboard__group-heading taskboard__group-heading--backlog">Бэклог</h3>
              <div className="taskboard__list">
                <div className="taskboard__item task task--active">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
              </div>
            </article>
            <article className="taskboard__group taskboard__group--processing">
              <h3 className="taskboard__group-heading taskboard__group-heading--processing">В процессе</h3>
              <div className="taskboard__list taskboard__list--sorted">
                <div className="taskboard__item task task--empty">
                  <p>Перетащите карточку</p>
                </div>
                <div className="taskboard__item task task--processing task--active">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task task--processing">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task task--processing">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
              </div>
              <div className="taskboard__item task task--processing">
                <div className="task__body">
                  <p className="task__view">Название первой задачи</p>
                  <input className="task__input" type="text" value="Название первой задачи"/>
                </div>
                <button className="task__edit" type="button" ariaLabel="Изменить"></button>
              </div>
            </article>
            <article className="taskboard__group taskboard__group--done">
              <h3 className="taskboard__group-heading taskboard__group-heading--done">Готово</h3>
              <div className="taskboard__list taskboard__list--sorted">
                <div className="taskboard__item task task--empty">
                  <p>Перетащите карточку</p>
                </div>
                <div className="taskboard__item task task--done task--active">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task task--processing">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
              </div>
            </article>
            <article className="taskboard__group taskboard__group--basket">
              <h3 className="taskboard__group-heading taskboard__group-heading--basket">Корзина</h3>
              <div className="taskboard__list taskboard__list--trash">
                <div className="taskboard__item task task--basket task--active">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>
                </div>
                <div className="taskboard__item task task--basket">
                  <div className="task__body">
                    <p className="task__view">Название первой задачи</p>
                    <input className="task__input" type="text" value="Название первой задачи"/>
                  </div>
                  <button className="task__edit" type="button" ariaLabel="Изменить"></button>

                </div>
                <div className="task--empty task task--empty-trash">
                  <p>Корзина пуста</p>
                </div>
              </div>
              <button className="taskboard__button button button--clear" type="button">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15.5374" y="5.16638" width="1.83333" height="14.6667" transform="rotate(45 15.5374 5.16638)"
                    fill="white" />
                  <rect x="16.8337" y="15.5372" width="1.83333" height="14.6667" transform="rotate(135 16.8337 15.5372)"
                    fill="white" />
                </svg>
                <span>Очистить</span>
              </button>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
