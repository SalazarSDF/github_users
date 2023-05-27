- **Тестовое задание для разработчика Frontend**
- **Задача**

Поиск проектов на Github, вывод результатов на экран

- **Технологии**

ReactJs/VueJs, Redux/Mobx/Vuex, Bootstrap, React-router-dom

- **Описание**

Разработать одностраничное приложение, руководствуясь дизайном по [ссылке](https://www.figma.com/file/nPBJfhZXTX79RSYZv9beYk/Test_Front).

Приложение должно реализовывать следующий механизм:

- Пользователь вводит в поле поиска текст, нажимает кнопку «Поиск»
- Производится отправка запроса на API Github  [*https://api.github.com/search/repositories?q=subject*](https://api.github.com/search/repositories?q=subject), где **subject** – введенный текст
- Результаты поиска выводятся на страницу
- Должен быть настроен Роут на первую страницу

Результаты выводить в виде карточек (cards). В карточке отображать:

- Имя проекта 
- Автор
- Количество звезд (Stargazers)
- Количество просмотров (Watchers)
- Кнопка раскрытия подробной информации

При нажатии на имя проекта осуществлять переход на репозиторий Github;

При нажатии на имя автора осуществлять переход на пользователя Github;

При перезагрузке страницы восстанавливать поисковой запрос в строке поиска, карточки проектов, актуальную страницу (в пагинаторе) без отправки запроса на API Github, т.е. восстанавливать данные из сохраненных локально (данные должны храниться в параметрах пути роута) .

Добавить возможность открывать карточку проекта с подробной информацией. Должна быть возможность редактирования карточки пользователя. Возможность удаления пользователя

Приложение не должно взаимодействовать с серверным API (кроме поиска на Github), все операции выполняются локально. В случае необходимости сохранения данных, необходимо использовать роут.

- **При разработке необходимо учитывать следующие факторы**
- Приложение должно следовать рекомендациями (guidelines) и официальной документации. В частности, приложение должно быть разделено на отдельные компоненты и подкомпоненты, использовать модель композиции для повторного использования кода между компонентами.
- Приложение должно работать в последних версиях в следующих браузерах:
- Chrome
- Safari
- Firefox
- Результирующий HTML код должен быть чистым, семантичным и структурированным в соответствии с представленной архитектурой страницы.
- При реализации CSS постарайтесь применить как можно больше подходящих техник, с которыми вы знакомы.
- Необходимо использовать изображения только для представления существенных блоков графической информации. Все остальные изображения, предназначенные только для оформления, должны быть реализованы с помощью CSS форматирования.
- **Дополнительные задачи**

Дополнительные задачи не являются обязательной частью. Тем не менее, выполнение этих задач будет плюсом.

- Сохранять состояние отредактированного проекта, при перезагрузке страницы. 
- Сохранение состояния удаленного пользователя после перезагрузки страницы.
- Вывод оповещений, в виде toast, о каких-либо изменениях в карточках
- Возможность просмотра по страницам: количество элементов на страницу выбирается из выпадающего списка (10, 25, 50).

- **Оценка результата**

При оценке результата будут приняты во внимание следующие критерии:

- Логичная структура приложения.
- Грамотность использования JS, CSS.
- Поведение страницы в критических ситуациях:
- Различный размер шрифта
- Различный размер окна браузера / экрана
- Оформление кода.
